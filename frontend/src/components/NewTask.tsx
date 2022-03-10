import { useEffect, useRef, useState } from 'react';
import callApi from '../lib/callApi';
import { dclock } from '../lib/types';
import { getDateString, getTimeStamp } from '../lib/utils';
import ErrorAlert from './alerts/ErrorAlert';
import SuccesAlert from './alerts/SuccessAlert';
import TimePicker from './TimePicker';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function NewTask({
    selectedDate,
    year,
    month,
    refreshTimes,
}: {
    selectedDate: number;
    year: number;
    month: number;
    refreshTimes: () => void;
}) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const [students, setStudents] = useState(null);

    async function getStudents() {
        const response = await callApi('/student/students');
        setStudents(response);
    }

    useEffect(() => {
        getStudents();
    }, []);
    console.log(students);
    function successForm() {
        setShowSuccess(true);
        setSubmitError(null);
    }

    function errorForm(error) {
        setSubmitError(error);
        setShowSuccess(false);
    }

    const [showSelection, setShowSelection] = useState(false);
    const defaultTime: dclock = '8:30';
    const [selectedTime, setSelectedTime] = useState(defaultTime);
    let timestampOfDate = new Date(
        getDateString(null, { selectedDate, year, month })
    ).getTime();

    const totalTimestamp: number = getTimeStamp(timestampOfDate, {
        hours: Number(selectedTime.split(':')[0]),
        minutes: Number(selectedTime.split(':')[1]),
    });

    const newTimeForm = useRef(null);

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const data = new FormData(newTimeForm.current);

        const student = data.get('student');
        const teacherNotes = data.get('teacherNotes');
        if (!student) {
            errorForm('Please select a student');
            return;
        }

        try {
            const response = await callApi('/times/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    timestamp: totalTimestamp,
                    student,
                    teacherNotes,
                }),
            });
            if (response.status === 'ok') {
                successForm();
                refreshTimes();
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                errorForm(err.message);
            } else {
                errorForm('Something went wrong');
            }
        }
    }

    function handleClick() {
        setShowSelection(true);
    }

    console.log(`aaaaa ${students}`);
    return (
        <div className="md:px-9 px-5 pt-5 pb-5  bg-gray-600 rounded-b text:left">
            {showSuccess && (
                <SuccesAlert
                    text="Meeting added successfully"
                    show={showSuccess}
                />
            )}
            {submitError && !showSuccess && (
                <ErrorAlert text={submitError} show={!!submitError} />
            )}
            {showSelection ? (
                <form
                    ref={newTimeForm}
                    name="AddTask"
                    onSubmit={submit}
                    className="pt-5"
                >
                    <Autocomplete
                        id="student-select"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        options={students.map((student) => {
                            return { ...student, label: student.name };
                        })}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Student"
                                name="student"
                                type="text"
                            />
                        )}
                    />
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="teacherNotes"
                        placeholder="Meeting notes"
                        aria-label="Meeting notes"
                    />
                    <div className="mt-2 p-5 w-100 flex text-xl">
                        <TimePicker
                            value={selectedTime}
                            setValue={setSelectedTime}
                        />
                    </div>
                    <input
                        value="Submit"
                        type="submit"
                        className="h-12 px-12 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 hover: cursor-pointer"
                    ></input>
                </form>
            ) : (
                <button
                    className="
                    h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 hover: cursor-pointer"
                    onClick={() => handleClick()}
                >
                    New Meeting
                </button>
            )}
        </div>
    );
}
