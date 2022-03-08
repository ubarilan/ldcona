import { GetServerSideProps } from 'next';
import getConfig from 'next/config';
import StudentLogin from '../components/StudentLogin';

export default function StudentLoginPage({
    redirectUri,
}: {
    redirectUri: string;
}) {
    return <StudentLogin redirectUri={redirectUri} />;
}

export function getServerSideProps() {
    const { redirectUri } = getConfig().publicRuntimeConfig;
    return {
        props: {
            redirectUri,
        },
    };
}
