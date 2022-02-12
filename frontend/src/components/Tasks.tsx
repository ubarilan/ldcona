import { KeyedMutator } from 'swr';
import { TaskAsTeacher } from '../lib/types';
import Task from './Task';
import { getDateString } from '../lib/utils';

export default function Tasks({
    times,
    refreshTimes,
    selectedDate,
    year,
    month,
}: {
    times: TaskAsTeacher[];
    refreshTimes: KeyedMutator<TaskAsTeacher>;
    selectedDate: number;
    year: number;
    month: number;
}) {
    let props = {
        selectedDate: selectedDate,
        year: year,
        month: month,
    };

    function filterTimes(time) {
        return (
            time.acquired &&
            getDateString(new Date(time.timestamp)) ===
                getDateString(null, props)
        );
    }

    return (
        <div>
            <div className="mx-auto container py-20 px-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {times.filter(filterTimes).map((time, i) => {
                        return (
                            <div className="rounded" key={time.id}>
                                <Task time={time} refreshTimes={refreshTimes} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
