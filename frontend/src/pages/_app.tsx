import '../styles/globals.scss';
import { useUser } from '../lib/httpHooks';
import PageWrapper from '../components/PageWrapper';

function MyApp({ Component, pageProps }) {
    const [user] = useUser();
    return (
        <PageWrapper user={user}>
            <Component {...pageProps} user={user} />
        </PageWrapper>
    );
}

export default MyApp;
