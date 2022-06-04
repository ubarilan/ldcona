import Link from 'next/link';
import Translation from '../translation.json';
import { User } from '../lib/types';

export default function MainPage() {
    return (
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                        {Translation.consultants_system} {Translation.of}
                    </span>{' '}
                    <span className="block text-rabi-600 xl:inline">
                        {Translation.lady_davis}
                    </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    {Translation.consultants_system_description}
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="rounded-md shadow">
                        <Link href="/meetings">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rabi-600 hover:bg-rabi-700 md:py-4 md:text-lg md:px-10">
                                {Translation.set_appointment}
                            </a>
                        </Link>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <Link href="/login">
                            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rabi-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                {Translation.login}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
