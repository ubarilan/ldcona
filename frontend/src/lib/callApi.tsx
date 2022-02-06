import getConfig from 'next/config';

const { apiURL } = getConfig().publicRuntimeConfig;

export default async function callApi(
    endpoint: string,
    options: RequestInit = {},
    fallBackResponse: any = {}
) {
    const res = await fetch(`${apiURL}${endpoint}`, options);
    try {
        const json = await res.json();
        return json;
    } catch (err) {
        return fallBackResponse;
    }
}
