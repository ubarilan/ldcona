import { React } from 'react';

export default function MonthDay(props) {
    function handleClick(event) {
        props.change(props.number);
    }

    return (
        <td onClick={() => handleClick()} className="pt-6">
            {props.isSelected ? (
                <div>
                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <p
                            role="link"
                            tabIndex="0"
                            className=" hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                        >
                            {props.number}
                        </p>
                    </div>
                </div>
            ) : (
                <div
                    className={`px-2 py-2 cursor-pointer flex w-full justify-center rounded-full hover:bg-indigo-100 ${
                        props.hasTasks && 'day-with-tasks'
                    }`}
                >
                    <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        {props.number}
                    </p>
                </div>
            )}
        </td>
    );
}
