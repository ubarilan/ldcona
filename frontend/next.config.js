const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://127.0.0.1:8080/api'
        : 'http://127.0.0.1:3000/api';

module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiURL,
        googleClientID:
            '814901300076-d98e7r4v6ohjqn4gj3k8n1ldop2li5dj.apps.googleusercontent.com',
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/api/:path*',
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/login-success',
                destination: '/',
                permanent: false,
            },
            {
                source: '/login-fail',
                destination: '/login',
                permanent: false,
            },
        ];
    },
};
