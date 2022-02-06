import { Dispatch, SetStateAction } from 'react';
import { dclock } from '../lib/types';

export default function TimePicker({
    value,
    setValue,
}: {
    value: dclock;
    setValue: Dispatch<SetStateAction<dclock>>;
}) {
    // Array of all the possible hours
    const possibleHours: number[] = Array.from(Array(23).keys()).map(
        (hour) => hour + 1
    );

    // Array of all the possible minutes
    const possibleMinutes: number[] = Array.from(Array(60).keys()).map(
        (minute) => minute
    );

    return (
        <div className="mt-2 p-5 w-21 text-center bg-white rounded-lg shadow-xl">
            <div className="flex">
                <select
                    name="hours"
                    className="bg-transparent text-xl appearance-none outline-none"
                    value={value.split(':')[0]}
                    onChange={(e) =>
                        setValue(`${e.target.value}:${value.split(':')[1]}`)
                    }
                >
                    {possibleHours.map((hour) => (
                        <option key={hour} value={hour}>
                            {hour.toString().padStart(2, '0')}
                        </option>
                    ))}
                </select>
                <span className="text-xl mr-3">:</span>
                <select
                    name="minutes"
                    className="bg-transparent text-xl appearance-none outline-none mr-4"
                    value={value.split(':')[1]}
                    onChange={(e) =>
                        setValue(`${value.split(':')[0]}:${e.target.value}`)
                    }
                >
                    {possibleMinutes.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute.toString().padStart(2, '0')}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
