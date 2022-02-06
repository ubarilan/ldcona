import { KeyedMutator } from 'swr';
import { TaskAsTeacher } from '../lib/types';
import Task from './Task';

export default function Tasks({
    times,
    refreshTimes,
}: {
    times: TaskAsTeacher[];
    refreshTimes: KeyedMutator<TaskAsTeacher>;
}) {
    return (
        <div>
            <div className="mx-auto container py-20 px-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {times.map((time) => (
                        <div className="rounded" key={time.id}>
                            <Task time={time} refreshTimes={refreshTimes} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
