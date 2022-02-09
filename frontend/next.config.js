const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://127.0.0.1:8080/api'
        : 'http://127.0.0.1:3000/apie';

module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiURL,
    },
    async rewrites() {
        return [
            {
                source: '/apie/:path*',
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
