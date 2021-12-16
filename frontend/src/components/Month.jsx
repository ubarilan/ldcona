import { React } from 'react';
import MonthDay from '@Components/MonthDay';
import EmptyDay from '@Components/EmptyDay';
import { getDateString, getDaysInMonth } from '@Lib/utils';

function NumbersWeek(props) {
    const timesLocale = props.times
        .filter((time) => time.acquired)
        .map((time) => getDateString(new Date(time.timestamp)));

    return (
        <tr>
            {Array.from({ length: props.start }, (_, i) => (
                <EmptyDay key={i} />
            ))}
            {Array.from({ length: 7 - props.start - props.end }, (_, i) => {
                const dateNumber = props.add + ++i;
                const localeDate = `${props.month + 1}/${dateNumber}/${
                    props.year
                }`;

                return (
                    <MonthDay
                        number={dateNumber}
                        key={i}
                        isSelected={dateNumber === props.selected}
                        change={props.selected_change}
                        hasTasks={timesLocale.includes(localeDate)}
                    />
                );
            })}
        </tr>
    );
}

function LastWeek(props) {
    if (props.first >= 5 && props.last !== 7) {
        return (
            <>
                <NumbersWeek
                    start={0}
                    add={7 - props.first + 7 * 3}
                    end={0}
                    selected_change={props.selected_change}
                    selected={props.selected}
                    times={props.times}
                    year={props.year}
                    month={props.month}
                />
                <NumbersWeek
                    start={0}
                    add={7 - props.first + 7 * 4}
                    end={7 - props.last}
                    selected_change={props.selected_change}
                    selected={props.selected}
                    times={props.times}
                    year={props.year}
                    month={props.month}
                />
            </>
        );
    }
    return (
        <NumbersWeek
            start={0}
            add={7 - props.first + 7 * 3}
            end={7 - props.last}
            selected_change={props.selected_change}
            selected={props.selected}
            times={props.times}
            year={props.year}
            month={props.month}
        />
    );
}

export default function Month(props) {
    let start_day = getDaysInMonth(props.year, props.month).getDay();
    let last_day = getDaysInMonth(props.year, props.month + 1).getDay();
    if (last_day === 0) last_day = 7;

    return (
        <tbody>
            <NumbersWeek
                start={start_day}
                add={0}
                end={0}
                selected_change={props.setSelectedDate}
                selected={props.selectedDate}
                times={props.times}
                year={props.year}
                month={props.month}
            />
            <NumbersWeek
                start={0}
                add={7 - start_day}
                end={0}
                selected_change={props.setSelectedDate}
                selected={props.selectedDate}
                times={props.times}
                year={props.year}
                month={props.month}
            />
            <NumbersWeek
                start={0}
                add={7 - start_day + 7}
                end={0}
                selected_change={props.setSelectedDate}
                selected={props.selectedDate}
                times={props.times}
                year={props.year}
                month={props.month}
            />
            <NumbersWeek
                start={0}
                add={7 - start_day + 7 * 2}
                end={0}
                selected_change={props.setSelectedDate}
                selected={props.selectedDate}
                times={props.times}
                year={props.year}
                month={props.month}
            />
            <LastWeek
                first={start_day}
                last={last_day}
                selected_change={props.setSelectedDate}
                selected={props.selectedDate}
                times={props.times}
                year={props.year}
                month={props.month}
            />
        </tbody>
    );
}
