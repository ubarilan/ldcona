const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://localhost:8080/api'
        : 'https://ldcona.hostar.one/api';

module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiURL,
        googleRedirectUri: 'https://ldcona.hostar.one/api/auth/google/',
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
