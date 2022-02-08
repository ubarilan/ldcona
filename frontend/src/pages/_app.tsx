import '../styles/globals.scss';
import { useUser } from '../lib/httpHooks';
import { User } from '../lib/types';
import PageWrapper from '../components/PageWrapper';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
    const exampleUser: User = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        grade: null,
        title: 'Your mom',
    };
    const [user, setUser] = useUser(exampleUser);
    // setUser(exampleUser);

    return (
        <SessionProvider session={pageProps.session} refetchInterval={0}>
            <PageWrapper user={user}>
                <Component {...pageProps} />
            </PageWrapper>
        </SessionProvider>
    );
}

export default MyApp;
