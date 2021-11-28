import { React } from 'react';

export default function WeekDay(props) {
    return (
        <th>
            <div className="w-full flex justify-center">
                <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                    {props.name}
                </p>
            </div>
        </th>
    );
}
