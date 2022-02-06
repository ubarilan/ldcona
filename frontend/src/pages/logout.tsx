import { NextRouter, useRouter } from 'next/router';
import callApi from '../lib/callApi';
import { useUser } from '../lib/httpHooks';

export default function Logout() {
    const router: NextRouter = useRouter();
    const [, setUser] = useUser();
    callApi('/logout', { method: 'POST' })
        .then((res) => res)
        .then(() => {
            setUser(null);
            router.replace('/');
        });
    return <></>;
}
