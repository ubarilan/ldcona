export default function WeekDay({ name }) {
    return (
        <th>
            <div className="w-full flex justify-center">
                <p className="text-base font-medium text-center text-gray-800">
                    {name}
                </p>
            </div>
        </th>
    );
}
