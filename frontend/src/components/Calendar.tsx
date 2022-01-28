import Calendar from 'react-calendar';
import React, { useState } from 'react';
import { Task } from '../lib/types';

export default function CalendarComponent() {
    const [value, onChange] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const mark = ['1/1/2022', '01-04-2022', '01-03-2022'];

    return (
        <div>
            <Calendar
                className="font-bold text-lg"
                onChange={onChange}
                value={value}
                onClickDay={(value) => {
                    console.log(selectedDate);
                    setSelectedDate(value);
                }}
                tileClassName={({ date, view }) => {
                    if (selectedDate.getTime() === date.getTime()) {
                        return 'bg-green-500 text-white';
                    }
                }}
            />
        </div>
    );
}
