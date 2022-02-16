import '../styles/globals.scss';
import { useUser } from '../lib/httpHooks';
import { User } from '../lib/types';
import PageWrapper from '../components/PageWrapper';

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useUser();
    return (
        <PageWrapper user={user}>
            <Component {...pageProps} />
        </PageWrapper>
    );
}

export default MyApp;
