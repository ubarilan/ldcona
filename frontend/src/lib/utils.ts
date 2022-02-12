export function getDateString(
    date: Date,
    props?: { month: number; year: number; selectedDate: number }
): string {
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
export function getDaysInMonth(year: number, month: number): Date {
    return new Date(year, month, 1);
}

export function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export function getTimeStamp(
    timestamp,
    { hours, minutes }: { hours: number; minutes: number }
): number {
    const date = new Date(timestamp);
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.getTime();
}