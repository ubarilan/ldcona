import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserInfo } from "@Lib/utils";
import Home from "@Pages/Home";
import Page404 from "@Pages/Page404";
import Login from "@Pages/Login";
import TeacherHome from "@Pages/Teacher/TeacherHome.jsx";
import Logout from "@Pages/Logout";
import Navbar from "@Components/Navbar";
import Team from "@Pages/Team";
import Settings from "@Pages/Settings";

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
    <>
      <Navbar user={currentUser} />
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
            element={<TeacherHome user={currentUser} />}
          />
          <Route path="/Team" element={<Team />} />
          <Route path="/Settings" element={<Settings user={currentUser} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}
