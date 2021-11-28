import { React } from 'react';

export default function WeekDay(props) {
    return (
        <th>
            <div class="w-full flex justify-center">
                <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                    {props.name}
                </p>
            </div>
        </th>
    );
}
