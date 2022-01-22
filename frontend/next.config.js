const apiURL =
    process.env.NODE_ENV === 'production'
        ? 'http://localhost:8080/api'
        : 'http://localhost:3000/api';

module.exports = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiURL,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/api/:path*',
            },
        ];
    },
};
