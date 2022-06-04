const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://localhost:8080/apie'
        : 'https://ldcona.hostar.one/apie';

module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiURL,
        googleRedirectUri: 'https://ldcona.hostar.one/apie/auth/google/',
    },
    async rewrites() {
        return [
            {
                source: '/apie/:path*',
                destination: 'http://localhost:8080/apie/:path*',
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
