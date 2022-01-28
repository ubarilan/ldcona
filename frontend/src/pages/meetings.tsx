import CalendarComponent from '../components/Calendar';
import Tasks from '../components/Tasks';
import { Task } from '../lib/types';
import { GetServerSideProps } from 'next';
import callApi from '../lib/callApi';
import { useState, useEffect } from 'react';

export default function Meetings() {
    return (
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
                <CalendarComponent />
                <Tasks />{' '}
            </div>
        </main>
    );
}
