import { React, useState, useEffect } from 'react';
import Task from '@Components/Task';

export default function Tasks() {
    const [times, setTimes] = useState([]);

    async function getTimes() {
        const response = await fetch('/api/times');
        setTimes(await response.json());
    }
    useEffect(() => {
        getTimes();
    }, []);

    return (
        <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
                {times
                    .filter((time) => time.acquired)
                    .map((time, i) => (
                        <Task
                            time={new Date(time?.['timestamp'])
                                .toLocaleTimeString()
                                .slice(0, -3)}
                            acquired={time?.['acquired'] || 'Empty hour'}
                            studentNotes={time?.['studentNotes']}
                            key={i}
                        />
                    ))}
            </div>
        </div>
    );
}
