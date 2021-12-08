import React, { useState, useEffect } from 'react';
import Week from '@Components/Week';
import Month from '@Components/Month';
import Tasks from '@Components/Tasks';

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

    const [times, setTimes] = useState([]);

    async function getTimes() {
        const response = await fetch('/api/times');
        setTimes(await response.json());
    }
    useEffect(() => {
        getTimes();
    }, []);

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
                            {d.getFullYear() + Math.floor(counter / 12)}
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
                            <Month
                                year={
                                    d.getFullYear() + Math.floor(counter / 12)
                                }
                                month={Math.abs(counter) % 12}
                            />
                        </table>
                    </div>
                </div>
                <Tasks />
            </div>
        </div>
    );
}
