import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Button, User } from '../lib/types';
import Translation from '../translation.json';
import MobileNav from './navbar/MobileNav';

export default function Navbar({ user }: { user: User | null }) {
    const buttons: Button[] = [
        { name: Translation.team, href: '/team' },
        { name: Translation.calendar, href: '/calendar' },
        { name: Translation.meetings, href: '/meetings' },
    ];

    // user && buttons.push({ name: Translation.hello, href: '/profile' });

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
                            {!user ? (
                                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:left-0">
                                    <span className="inline-flex rounded-md shadow">
                                        <a
                                            href="/login"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-rabi-600 bg-white hover:bg-gray-50"
                                        >
                                            {Translation.login}
                                        </a>
                                    </span>
                                </div>
                            ) : (
                                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:left-0">
                                    <span className="inline-flex rounded-md shadow">
                                        <a
                                            href="/logout"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-rabi-600 bg-white hover:bg-gray-50"
                                        >
                                            {Translation.logout}
                                        </a>
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