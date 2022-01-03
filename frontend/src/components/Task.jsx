import { React } from 'react';

export default function Task({ time, acquired, studentNotes }) {
    return (
        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
            <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                {time}
            </p>
            <p
                tabIndex="0"
                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
            >
                {acquired}
            </p>
            <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                {studentNotes}
            </p>
        </div>
    );
}
