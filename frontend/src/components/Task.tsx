import React from 'react';
import { KeyedMutator } from 'swr';
import callApi from '../lib/callApi';
import { TaskAsTeacher } from '../lib/types';
import Translation from '../translation.json';

export default function Task({
    time,
    refreshTimes,
}: {
    time: TaskAsTeacher;
    refreshTimes: KeyedMutator<TaskAsTeacher>;
}) {
    const timeString = new Date(time.timestamp).toLocaleString().slice(0, -6);
    async function removeTime(time: TaskAsTeacher) {
        await callApi(`/times/remove/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(time),
        });
        refreshTimes();
    }

    return (
        <div className="w-full h-64 flex flex-col justify-between bg-gray-300 dark:border-gray-700 rounded-lg text-right mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 font-bold mb-3">
                    {Translation.student_name}: {time.acquired}
                </h4>

                {time.teacherNotes && (
                    <p className="text-gray-800 text-sm ">
                        {Translation.teacher_notes}: {time.teacherNotes}
                    </p>
                )}
                {time.studentNotes && (
                    <p className="text-gray-800 text-sm">
                        {Translation.student_notes}: {time.studentNotes}
                    </p>
                )}
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800 ">
                    <p className="text-sm">{timeString}</p>
                    <button onClick={() => removeTime(time)}>
                        <div className="w-8 h-8 rounded-full dark:text-gray-800 border border-red-700 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#B91C1C"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
