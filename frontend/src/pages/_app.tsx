import '../styles/globals.scss';
import { useUser } from '../lib/userHook';
import { User } from '../lib/types';
function MyApp({ Component, pageProps }) {
    const [user, setUser] = useUser();
    setUser({} as User);
    console.log(user);
    return <Component user={user} {...pageProps} />;
}

export default MyApp;
