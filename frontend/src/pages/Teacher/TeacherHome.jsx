import React, { useState } from 'react';
import Week from '@Components/Week';
import MonthDay from '@Components/MonthDay';
import Month from '@Components/Month';

export default function TeacherHome() {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const d = new Date();
    let [counter, setCounter] = useState(d.getMonth());

    const addCounter = () => setCounter(counter + 1);
    const decCounter = () => setCounter(counter - 1);

    return (
        <div className="flex items-center justify-center py-8 px-4">
            <div className="max-w-sm w-full shadow-lg">
                <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                    <div className="px-4 flex items-center justify-between">
                        <span
                            tabIndex="0"
                            className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
                        >
                            {months[Math.abs(counter) % 12]}{' '}
                            {d.getYear() + 1900 + Math.floor(counter / 12)}
                        </span>
                        <div className="flex items-center">
                            <button
                                aria-label="calendar backward"
                                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                                onClick={decCounter}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-chevron-left"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </button>
                            <button
                                aria-label="calendar forward"
                                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                                onClick={addCounter}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler  icon-tabler-chevron-right"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-12 overflow-x-auto">
                        <table className="w-full">
                            <Week />
                            <Month year={d.getYear() + 1900 + Math.floor(counter / 12)} month={Math.abs(counter) % 12}/>
                        </table>
                    </div>
                </div>
                <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
                    <div className="px-4">
                        <div className="border-b pb-4 border-gray-400 border-dashed">
                            <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                                9:00 AM
                            </p>
                            <a
                                tabIndex="0"
                                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                            >
                                Zoom call with design team
                            </a>
                            <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                                Discussion on UX sprint and Wireframe review
                            </p>
                        </div>
                        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                            <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                                10:00 AM
                            </p>
                            <a
                                tabIndex="0"
                                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                            >
                                Orientation session with new hires
                            </a>
                        </div>
                        <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                            <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                                9:00 AM
                            </p>
                            <a
                                tabIndex="0"
                                className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                            >
                                Zoom call with design team
                            </a>
                            <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                                Discussion on UX sprint and Wireframe review
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
