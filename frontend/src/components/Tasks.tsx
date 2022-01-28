import Task from './Task';

// Used the component from: https://tailwinduikit.com/components/webapp/note/note

export default function Tasks() {
    const tasks = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div>
            <div className="mx-auto container py-20 px-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tasks.map((task) => (
                        <div className="rounded" key={task}>
                            <Task />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
