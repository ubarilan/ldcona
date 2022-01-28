import '../styles/globals.scss';
import { useUser } from '../lib/userHook';
import { User } from '../lib/types';
import PageWrapper from '../components/PageWrapper';
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
        <PageWrapper user={user}>
            <Component {...pageProps} />
        </PageWrapper>
    );
}

export default MyApp;
