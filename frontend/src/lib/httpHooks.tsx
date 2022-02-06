import { useState } from 'react';
import useSWR, { KeyedMutator } from 'swr';
import callApi from './callApi';
import { TaskAsTeacher, User } from './types';
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

export function useTimes(): [TaskAsTeacher[], KeyedMutator<TaskAsTeacher>] {
    const { data, mutate, error } = useSWR('/times', fetcher);
    if (error) return [null, null];
    const times: TaskAsTeacher[] = data || [];

    return [times, mutate];
}
