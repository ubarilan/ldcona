import getConfig from 'next/config';

const { apiURL } = getConfig().publicRuntimeConfig;

export default async function callApi(endpoint, options: RequestInit = {}) {
    const res = await fetch(`${apiURL}${endpoint}`, options);
    const json = await res.json();
    return json;
}
