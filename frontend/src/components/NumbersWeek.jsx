import { React } from 'react';
import MonthDay from '@Components/MonthDay';
import EmptyDay from '@Components/EmptyDay';
import { getDateString } from '@Lib/utils';

export default function NumbersWeek(props) {
    if (props.lastWeek) {
        return <LastWeek {...props} />;
    } else
        return (
            <tr>
                {Array.from({ length: props.start }, (_, i) => (
                    <EmptyDay key={i} />
                ))}
                {Array.from({ length: 7 - props.start - props.end }, (_, i) => {
                    const dateNumber = props.add + ++i;
                    const localeDate = getDateString(
                        new Date(
                            `${props.month + 1}/${dateNumber}/${props.year}`
                        )
                    );
                    return (
                        <MonthDay
                            number={dateNumber}
                            key={i}
                            isSelected={dateNumber === props.selected}
                            change={props.selected_change}
                            hasTasks={props.timesLocale.includes(localeDate)}
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
                    timesLocale={props.timesLocale}
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
                    timesLocale={props.timesLocale}
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
            timesLocale={props.timesLocale}
        />
    );
}
