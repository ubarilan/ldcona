import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Translation from '../translation.json';

const navigation = [
    { name: Translation.team, href: '/team' },
    { name: Translation.calendar, href: '/calendar' },
    { name: Translation.meetings, href: '/meetings' },
];

export default function Hero() {
    return (
        <div className="relative bg-gray-50 overflow-hidden">
            <div
                className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
                aria-hidden="true"
            >
                <div className="relative h-full max-w-7xl mx-auto">
                    <svg
                        className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={784}
                            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                        />
                    </svg>
                    <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={784}
                        fill="none"
                        viewBox="0 0 404 784"
                    >
                        <defs>
                            <pattern
                                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={784}
                            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                        />
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
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
                                {navigation.map((item, i) => (
                                    <Link href={item.href} key={i}>
                                        <a className="font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
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

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                                dir="rtl"
                            >
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    {/* Used while clicked on menu button */}
                                    <img
                                        className="h-8 w-auto select-none"
                                        src="/img/logo.png"
                                        alt=""
                                        width={193.16}
                                    />
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rabi-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {navigation.map((item, i) => (
                                        <Link
                                            href={item.href}
                                            key={`navlink-${i}`}
                                        >
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                <a
                                    href="/login"
                                    className="block w-full px-5 py-3 text-center font-medium text-rabi-600 bg-gray-50 hover:bg-gray-100"
                                >
                                    {Translation.login}
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">
                                {Translation.consultans_system} {Translation.of}
                            </span>{' '}
                            <span className="block text-rabi-600 xl:inline">
                                {Translation.lady_davis}
                            </span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow">
                                <Link href="#">
                                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rabi-600 hover:bg-rabi-700 md:py-4 md:text-lg md:px-10">
                                        Get started
                                    </a>
                                </Link>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <Link href="#">
                                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rabi-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                        Live demo
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
