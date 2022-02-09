import '../styles/globals.scss';
import { useUser } from '../lib/httpHooks';
import { User } from '../lib/types';
import PageWrapper from '../components/PageWrapper';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useUser();
    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <PageWrapper user={user}>
                <Component {...pageProps} />
            </PageWrapper>
        </SessionProvider>
    );
}

export default MyApp;
