import { signIn, signOut, useSession } from 'next-auth/react';

export default function StudentLogin() {
    const { data: session, status } = useSession();
    console.log(session?.user);

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
