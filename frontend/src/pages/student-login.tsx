import { signIn, useSession } from 'next-auth/react';

export default function StudentLogin() {
    return (
        <a
            href="/api/auth/signin"
            onClick={(e) => {
                e.preventDefault();
                signIn();
            }}
        >
            login
        </a>
    );
}
