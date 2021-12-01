import { Component, useState } from 'react';

export default function MonthDay(props) {
    const [clicked, setClicked] = useState([false]);
    //this.list =
    //    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full flex items-center justify-center w-full rounded-full cursor-pointer w-full h-full'.split(
    //        ' '
    //    );

    function handleClick(event) {
        //this.list.map((x) => event.target.classList.add(x));
        setClicked(false);
    }

    return (
        <td onClick={handleClick} className="pt-6">
            {!clicked ? (
                <td>
                    <div class="">
                        <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                            <a
                                role="link"
                                tabindex="0"
                                class=" hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                            >
                                {props.number}
                            </a>
                        </div>
                    </div>
                </td>
            ) : (
                <div className="px-2 py-2 cursor-pointer flex w-full justify-center rounded-full hover:bg-indigo-100">
                    <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        {props.number}
                    </p>
                </div>
            )}
        </td>
    );
}
