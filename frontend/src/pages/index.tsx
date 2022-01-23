import Head from 'next/head';
import Hero from '../components/MainPage';
import Team from '../components/Team';
import Footer from '../components/Footer';
import callApi from '../lib/callApi';
import Translation from '../translation.json';
export async function getServerSideProps() {
    const teachers = await callApi('/teachers');
    return {
        props: {
            teachers,
        },
    };
}

export default function Home({ teachers }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/img/favicon.ico" />
                <title>
                    {Translation.consultans_system} | {Translation.lady_davis}
                </title>
            </Head>
            <Hero />
            <Team teachers={teachers} />
            <Footer />
        </>
    );
}
