import Head from 'next/head';
import MainPage from '../components/MainPage';
import Team from '../components/Team';
import Footer from '../components/Footer';
import callApi from '../lib/callApi';
import Translation from '../translation.json';
import { GetServerSideProps } from 'next';
import { User } from '../lib/types';

export default function Home({
    teachers,
    user,
}: {
    teachers: User[];
    user: User | null;
}) {
    return (
        <>
            <MainPage />
            <Team teachers={teachers} />
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
