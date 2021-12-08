import React from 'react';
import MonthDay from '@Components/MonthDay';
import EmptyDay from '@Components/EmptyDay';

function getDaysInMonth(year, month) {
    return new Date(year, month, 1);
}

function NumbersWeek(props) {
    return (
        <tr>
            {Array.from({ length: props.start }, (_, i) => (
                <EmptyDay key={i} />
            ))}
            {Array.from({ length: 7 - props.start - props.end }, (_, i) => (
                <MonthDay
                    number={props.add + i + 1}
                    key={i}
                    on={i === selected_day_num}
                />
            ))}
        </tr>
    );
}

function LastWeek(props) {
    if (props.first >= 5 && props.last !== 7) {
        return (
            <>
                <NumbersWeek start={0} add={7 - props.first + 7 * 3} end={0} />
                <NumbersWeek
                    start={0}
                    add={7 - props.first + 7 * 4}
                    end={7 - props.last}
                />
            </>
        );
    }
    return (
        <NumbersWeek
            start={0}
            add={7 - props.first + 7 * 3}
            end={7 - props.last}
        />
    );
}

export default function Month(props) {
    let start_day = getDaysInMonth(props.year, props.month).getDay();
    let last_day = getDaysInMonth(props.year, props.month + 1).getDay();
    if (last_day === 0) last_day = 7;
    let selected_day_num = 1;

    return (
        <tbody>
            <NumbersWeek start={start_day} add={0} end={0} />
            <NumbersWeek start={0} add={7 - start_day} end={0} />
            <NumbersWeek start={0} add={7 - start_day + 7} end={0} />
            <NumbersWeek start={0} add={7 - start_day + 7 * 2} end={0} />
            <LastWeek first={start_day} last={last_day} />
        </tbody>
    );
}
