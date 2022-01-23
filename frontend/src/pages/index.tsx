import Head from 'next/head';
import Hero from '../components/MainPage';
import Team from '../components/Team';
import Footer from '../components/Footer';
import callApi from '../lib/callApi';
import Translation from '../translation.json';
import { GetServerSideProps } from 'next';
import { User } from '../lib/types';

export default function Home({ teachers }: { teachers: User[] }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>
                    {Translation.consultants_system} | {Translation.lady_davis}
                </title>
            </Head>
            <Hero />
            <Team teachers={teachers} />
            <Footer />
        </>
    );
}
export const getServerSideProps: GetServerSideProps = async () => {
    const teachers = await callApi('/teachers');
    return {
        props: {
            teachers,
        },
    };
};
