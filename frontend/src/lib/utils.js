export function getDateString(date, props) {
    if (date) return date.toLocaleDateString();
    else if (props)
        return getDateString(
            new Date(
                `${props.year}-${props.month + 1}-${String(
                    props.selectedDate
                ).padStart(2, '0')}`
            )
        );
}
export function getDaysInMonth(year, month) {
    return new Date(year, month, 1);
}
