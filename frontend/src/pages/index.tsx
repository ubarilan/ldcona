import Head from 'next/head';
import Hero from '../components/Hero';
import Team from '../components/Team';
import Footer from '../components/Footer';
import callApi from '../lib/callApi';

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
                <title>מערכת יועצות // ליידי דייויס</title>
            </Head>
            <Hero />
            <Team teachers={teachers} />
            <Footer />
        </>
    );
}
