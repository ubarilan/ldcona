import Translation from '../translation.json';
import { User } from '../lib/types';
export default function Team({ teachers }: { teachers: User[] }) {
    teachers.sort((a, b) => a.grade - b.grade);
    return (
        <div className="bg-gray-50">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <ul
                            role="list"
                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                        >
                            {teachers.map((teacher, i) => (
                                <li key={`consultant-${i}`}>
                                    <div className="flex items-center space-x-4 lg:space-x-6">
                                        <img
                                            className="w-16 h-16 select-none rounded-full lg:w-20 lg:h-20"
                                            src={`https://ui-avatars.com/api/?name=${teacher.firstName}+${teacher.lastName}&size=200&background=3482F6&color=ffffff`}
                                            alt=""
                                        />
                                        <div className="font-medium select-none text-lg leading-6 space-y-1">
                                            <h3>
                                                {teacher.firstName}{' '}
                                                {teacher.lastName}
                                            </h3>
                                            <p className="text-rabi-600">
                                                {teacher.title}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            {Translation.meet_our_team}
                        </h2>
                        <p className="text-xl text-gray-500">
                            Libero fames augue nisl porttitor nisi, quis. Id ac
                            elit odio vitae elementum enim vitae ullamcorper
                            suspendisse. Vivamus fringilla.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
