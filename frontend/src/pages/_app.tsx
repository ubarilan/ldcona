import '../styles/globals.scss';
import { useUser } from '../lib/httpHooks';
import PageWrapper from '../components/PageWrapper';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
    const [user] = useUser();
    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <PageWrapper user={user}>
                <Component {...pageProps} user={user} />
            </PageWrapper>
        </SessionProvider>
    );
}

export default MyApp;
