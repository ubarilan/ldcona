import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { Button } from '../../lib/types';
import Translation from '../../translation.json';

export default function MobileNav({ buttons }: { buttons: Button[] }) {
    return (
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
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                        {buttons.map((item, i) => (
                            <Link href={item.href} key={`navlink-${i}`}>
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
    );
}
