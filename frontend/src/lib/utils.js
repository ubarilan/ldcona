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

export function logout() {
    fetch('/api/logout', { method: 'POST' });
    window.location.href = '/';
}

export async function getUserInfo() {
    const response = await fetch('/api/userinfo');
    const userInfo = await response.json();

    return userInfo;
}
