import { React } from 'react';
import MonthDay from '@Components/MonthDay';

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

export default function Month(props) {
    let daysInMonth;
    return (
        <thead>
            <tr>
                {monthDays.map((name) => (
                    <MonthDay name={name} key={name} />
                ))}
            </tr>
        </thead>
    );
}
