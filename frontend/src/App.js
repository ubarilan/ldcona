import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserInfo } from '@Lib/utils';
import Home from '@Pages/Home';
import Page404 from '@Pages/Page404';
import Login from '@Pages/Login';
import TeacherHome from '@Pages/Teacher/TeacherHome.jsx';
import Logout from '@Pages/Logout';
import Navbar from '@Components/Navbar';

export default function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const url = window.location.href;

    async function getCurrentUser() {
        const userInfo = await getUserInfo();
        if (!userInfo.user) setCurrentUser(null);
        else setCurrentUser(userInfo.user);
    }

    useEffect(() => {
        getCurrentUser();
    }, [url]);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/login-success"
                    element={<Navigate replace to="/teacherhome" />}
                />
                <Route
                    path="/login-fail"
                    element={<Navigate replace to="/login" />}
                />
                <Route
                    path="/teacherhome"
                    element={
                        <>
                            {' '}
                            <Navbar />
                            <TeacherHome />{' '}
                        </>
                    }
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}
