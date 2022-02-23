import GoogleLogin from 'react-google-login';
import GoogleLoginButton from './GoogleLoginButton';
export default function StudentLogin({ googleClientID }) {
    const redirectUri = 'http://localhost:3000/api/auth/google/';

    return (
        <>
            <GoogleLogin
                clientId={googleClientID}
                buttonText="Log in with Google"
                redirectUri={redirectUri}
            />
            <GoogleLoginButton href={redirectUri} />
        </>
    );
}
