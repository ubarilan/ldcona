import useSWR, { KeyedMutator } from 'swr';
import callApi from './callApi';
import { User } from './types';
const fetcher = async (url) => await callApi(url);

export function useUser() {
    const { data, mutate, error } = useSWR('/userinfo', fetcher);
    if (error) return null;
    const user: User | null = data ? data.user : null;

    return [user, mutate];
}
