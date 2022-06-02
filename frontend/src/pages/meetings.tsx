import React, { useState } from 'react';
import Week from '../components/Week';
import Month from '../components/Month';
import Tasks from '../components/Tasks';
import { getDateString } from '../lib/utils';
import NewTask from '../components/NewTask';
import { User } from '../lib/types';
import { useTimes } from '../lib/httpHooks';
import Translation from '../translation.json';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

export default function TeacherHome({ user }: { user: User }) {
    if (user == null) {
        return <h1>404 Not found</h1>;
    }
    const router = useRouter();

    const { months } = Translation;
    const currentDate = new Date();

    let [selectedDate, setSelectedDate] = useState(currentDate.getDate());

    let [counter, setCounter] = useState(currentDate.getMonth());

    const addCounter = () => setCounter(counter + 1); //|| setSelectedDate(1);
    const decCounter = () => setCounter(counter - 1); //|| setSelectedDate(1);

    const [times, refreshTimes] = useTimes();

    const timesLocale: string[] = times.map((time) =>
        getDateString(new Date(time.timestamp))
    );

    const monthsNumbers: number[] = times.map((time) =>
        new Date(time.timestamp).getMonth()
    );

    return (
        <>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="max-w-sm w-full shadow-lg">
                    <div className="md:p-8 p-5 dark:bg-gray-400 bg-white rounded-t">
                        <div
                            className={`px-4 flex items-center justify-between ${
                                monthsNumbers.includes(
                                    Math.abs(counter) % 12
                                ) && 'month-with-tasks'
                            }`}
                        >
                            <span
                                tabIndex={0}
                                className="focus:outline-none text-base font-bold text-gray-800"
                            >
                                {counter >= 0
                                    ? months[Math.abs(counter) % 12]
                                    : months[
                                          11 - (Math.abs(counter) % 12)
                                      ]}{' '}
                                {currentDate.getFullYear() +
                                    Math.floor(counter / 12)}
                            </span>
                            <div className="flex items-center">
                                <button
                                    aria-label="calendar backward"
                                    className="focus:text-gray-400 hover:text-gray text-gray-800 "
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
                                    className="focus:text-gray-400 hover:text-gray ml-3 text-gray-800"
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
                                    selectedDate={selectedDate}
                                    setSelectedDate={setSelectedDate}
                                    year={
                                        currentDate.getFullYear() +
                                        Math.floor(counter / 12)
                                    }
                                    month={
                                        counter >= 0
                                            ? Math.abs(counter) % 12
                                            : 11 - (Math.abs(counter) % 12)
                                    }
                                    times={times}
                                    timesLocale={timesLocale}
                                />
                            </table>
                        </div>
                    </div>
                    <NewTask
                        selectedDate={selectedDate}
                        year={
                            currentDate.getFullYear() + Math.floor(counter / 12)
                        }
                        month={
                            counter >= 0
                                ? Math.abs(counter) % 12
                                : 11 - (Math.abs(counter) % 12)
                        }
                        refreshTimes={refreshTimes}
                    />
                </div>
            </div>
            <Tasks
                times={times}
                refreshTimes={refreshTimes}
                selectedDate={selectedDate}
                year={currentDate.getFullYear() + Math.floor(counter / 12)}
                month={
                    counter >= 0
                        ? Math.abs(counter) % 12
                        : 12 - (Math.abs(counter) % 12)
                }
            />
        </>
    );
}
