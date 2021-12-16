import { React } from 'react';
import NumbersWeek from '@Components/NumbersWeek';
import { getDaysInMonth } from '@Lib/utils';

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
                timesLocale={props.timesLocale}
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
                timesLocale={props.timesLocale}
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
                timesLocale={props.timesLocale}
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
                timesLocale={props.timesLocale}
            />
            <NumbersWeek
                lastWeek={true}
                first={start_day}
                last={last_day}
                selected_change={props.setSelectedDate}
                selected={props.selectedDate}
                times={props.times}
                year={props.year}
                month={props.month}
                timesLocale={props.timesLocale}
            />
        </tbody>
    );
}
