import getConfig from 'next/config';
import GoogleLogin from 'react-google-login';
import { handleGoogleLogin } from '../lib/utils';

export default function StudentLogin({ googleClientID }) {
    const redirectUri = 'http://localhost:3000/api/student/auth/google';

    return (
        <GoogleLogin
            clientId={googleClientID}
            buttonText="Log in with Google"
            onSuccess={(googleData) => handleGoogleLogin(googleData)}
            onFailure={(googleData) => handleGoogleLogin(googleData)}
            cookiePolicy={'single_host_origin'}
            redirectUri={redirectUri}
        />
    );
}
