import { signOut, useSession } from 'next-auth/react';
import { NextRouter, useRouter } from 'next/router';
import callApi from '../lib/callApi';
import { useUser } from '../lib/httpHooks';

export default function Logout() {
    const router: NextRouter = useRouter();
    const [user, setUser] = useUser();
    const { status } = useSession();
    if (user) {
        callApi('/logout', { method: 'POST' })
            .then((res) => res)
            .then(() => {
                setUser(null);
                router.replace('/');
            });
    } else if (status !== 'unauthenticated') {
        signOut({
            redirect: true,
            callbackUrl: '/',
        });
    }
    return <></>;
}
