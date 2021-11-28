import { React } from 'react';

export default function MonthDay(props) {
    return (
        <td className="pt-6">
            <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                    {props.number}
                </p>
            </div>
        </td>
    );
}
