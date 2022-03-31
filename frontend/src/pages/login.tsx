import getConfig from 'next/config';
import { useRouter } from 'next/router';
import ErrorAlert from '../components/alerts/ErrorAlert';
import LoginForm from '../components/Login';

export default function Login({
    googleRedirectUri,
}: {
    googleRedirectUri: string;
}) {
    const router = useRouter();
    const { err } = router.query;

    return (
        <div className="flex vertical-center">
            <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                <h1 className="font-bold text-2xl my-10"> Login </h1>
                {err && (
                    <div className="mb-1">
                        <ErrorAlert text={String(err)} show={true} />
                    </div>
                )}
                {<LoginForm googleRedirectUri={googleRedirectUri} />}
            </div>
        </div>
    );
}

export function getServerSideProps() {
    const { googleRedirectUri } = getConfig().publicRuntimeConfig;
    return {
        props: {
            googleRedirectUri,
        },
    };
}
