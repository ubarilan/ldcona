import { useRouter } from 'next/router';
import ErrorAlert from '../components/alerts/ErrorAlert';
import LoginForm from '../components/LoginForm';

export default function Login() {
    const router = useRouter();
    const { err } = router.query;

    return (
        <div className="flex vertical-center">
            <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                <h1 className="font-bold text-2xl my-10"> Login </h1>
                {err && <ErrorAlert text={String(err)} show={true} />}
                {<LoginForm />}
            </div>
        </div>
    );
}
