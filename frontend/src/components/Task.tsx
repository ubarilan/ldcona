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
        const res = await callApi(`/times/remove/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(time),
        });
        refreshTimes();
    }
    return (
        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
            <p className="text-xs font-light leading-3 text-gray-500 inliner">
                {timeString}
            </p>
            <button onClick={() => removeTime(time)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-red-500 hover:stroke-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <p
                tabIndex={0}
                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 mt-2"
            >
                {time.acquired}
            </p>
            {time.teacherNotes && (
                <p className="text-sm pt-2 leading-none text-gray-600">
                    {Translation.teacher_notes}: {time.teacherNotes}
                </p>
            )}
            {time.studentNotes && (
                <p className="text-sm pt-2 leading-none text-gray-600">
                    {Translation.student_notes}: {time.studentNotes}
                </p>
            )}
        </div>
    );
}
