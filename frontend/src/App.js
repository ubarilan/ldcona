import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import TeacherHome from './pages/Teacher/TeacherHome.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/login-success"
                    element={<Navigate replace to="/teacherhome" />}
                />
                <Route
                    path="/login-fail"
                    element={<Navigate replace to="/login" />}
                />
                <Route path="/teacherhome" element={<TeacherHome />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default App;
