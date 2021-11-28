import React, { useState } from 'react';
import Week from '@Components/Week';
import MonthDay from '@Components/MonthDay';

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
                            <tbody>
                                <tr>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>

                                    <MonthDay number={1} />
                                    <MonthDay number={2} />
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                3
                                            </p>
                                        </div>
                                    </td>
                                    <td className="pt-6">
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                4
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                5
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                6
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                7
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="w-full h-full">
                                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a
                                                    role="link"
                                                    tabIndex="0"
                                                    className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                                                >
                                                    8
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                9
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                10
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                11
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                12
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                13
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                14
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                15
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                16
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                17
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                18
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                19
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                20
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                21
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                22
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                23
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                24
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100">
                                                25
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                26
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                27
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                28
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                29
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                                30
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
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
