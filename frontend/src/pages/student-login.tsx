import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import StudentLogin from '../components/StudentLogin';

export default function StudentLoginPage({ googleClientID }) {
    return <StudentLogin googleClientID={googleClientID} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { googleClientID } = getConfig().publicRuntimeConfig;
    return {
        props: {
            googleClientID,
        },
    };
};
