const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://localhost:8080/api'
        : 'http://localhost:3000/api';

module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiURL,
        googleRedirectUri: 'http://localhost:3000/api/auth/google/',
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
