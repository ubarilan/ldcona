import Navbar from './Navbar';
import Translation from '../translation.json';
import Head from 'next/head';
import Footer from './Footer';
import dynamic from 'next/dynamic';

const DynamicNav = dynamic(() => import('./Navbar'), { ssr: false });
export default function PageWrapper({ children, user }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>
                    {Translation.consultants_system} | {Translation.lady_davis}
                </title>
            </Head>

            <div className="relative bg-gray-50 overflow-hidden">
                <div className="relative pt-6 pb-16 sm:pb-24">
                    <DynamicNav user={user} />
                    {children}
                </div>
            </div>

            <Footer />
        </>
    );
}
