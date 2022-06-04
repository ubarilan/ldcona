import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Button, User } from '../lib/types';
import Translation from '../translation.json';
import MobileNav from './navbar/MobileNav';
import { signIn, useSession } from 'next-auth/react';

export default function Navbar({ user }: { user: User | null }) {
    const buttons: Button[] = [
        //{ name: Translation.team, href: '/team' },
        //{ name: Translation.calendar, href: '/calendar' },
        //{ name: Translation.meetings, href: '/meetings' },
    ];
    const { status } = useSession();

    return (
        <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                    className="relative flex items-center justify-between sm:h-10 md:justify-center"
                    aria-label="Global"
                >
                    <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                        <div
                            className="flex items-center justify-between w-full md:w-auto"
                            dir="rtl"
                        >
                            {!user && status === 'unauthenticated' ? (
                                <div className="md:flex space-x-10 gap-x-1">
                                    <div className="hidden md:flex md:items-center md:justify-end md:inset-y-0 md:left-0 transition duration-300 ease-in-out transform hover:scale-120 hover:-translate-y-1">
                                        <span className="inline-flex rounded-md shadow border-rabi-600 border ">
                                            <Link href="/api/auth/signin">
                                                <a
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        signIn();
                                                    }}
                                                    href="/api/auth/signin"
                                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-white text-rabi-600 hover:bg-gray-200"
                                                >
                                                    {Translation.student_login}
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                    <div className="hidden  md:flex md:items-center md:justify-end md:inset-y-0 md:left-0 transition duration-300 ease-in-out transform hover:scale-120 hover:-translate-y-1">
                                        <span className="inline-flex rounded-md shadow">
                                            <Link href="/login">
                                                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-rabi-600 text-white hover:bg-rabi-700">
                                                    {Translation.teacher_login}
                                                </a>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:left-0">
                                    <span className="inline-flex rounded-md shadow">
                                        <Link href="/logout">
                                            <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-rabi-600 bg-white hover:bg-gray-50">
                                                {Translation.logout}
                                            </a>
                                        </Link>
                                    </span>
                                </div>
                            )}
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rabi-500">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <MenuIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:space-x-10">
                        {buttons.map((item, i) => (
                            <Link href={item.href} key={i}>
                                <a className="font-medium text-gray-500 hover:text-gray-900">
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                        {user && (
                            <p className="font-medium hover:text-gray-900">
                                {Translation.hello}, {user.firstName}
                            </p>
                        )}
                    </div>
                    {/* Panel logo on top right */}
                    <Link href="/">
                        <a>
                            <img
                                className="lg:h-8 w-auto xl:h-10 md:h-5 select-none md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
                                src="/img/logo.png"
                                alt="Top right logo"
                            />
                        </a>
                    </Link>
                </nav>
            </div>
            <MobileNav buttons={buttons} />
        </Popover>
    );
}
