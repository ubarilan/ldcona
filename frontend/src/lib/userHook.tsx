import { useState } from 'react';
import useSWR, { KeyedMutator } from 'swr';
import callApi from './callApi';
import { User } from './types';
const fetcher = async (url) => await callApi(url);

export function useUser(
    givenUser: User = null
): [User | null, (user: User) => void] {
    const { data, mutate, error } = useSWR('/userinfo', fetcher);
    if (error) return null;
    const user: User | null = data ? data.user : null;

    function setUser(user: User): void {
        mutate({ user });
    }

    return [user, setUser];
}
