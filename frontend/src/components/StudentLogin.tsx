import getConfig from 'next/config';
import GoogleLoginButton from './GoogleLoginButton';
export default function StudentLogin({ redirectUri }: { redirectUri: string }) {
    return <GoogleLoginButton href={redirectUri} />;
}
