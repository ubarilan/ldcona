import { React } from 'react';
import WeekDay from '@Components/WeekDay';

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function Week() {
    return (
        <thead>
            <tr>
                {weekDays.map((name) => (
                    <WeekDay name={name} key={name} />
                ))}
            </tr>
        </thead>
    );
}
