import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "@Pages/Home";
import Page404 from "@Pages/Page404";
import Login from "@Pages/Login";
import TeacherHome from "@Pages/Teacher/TeacherHome.jsx";
import RequiredAuth from "./RequiredAuth";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/login-success"
          element={<Navigate replace to="/teacherhome" />}
        />
        <Route path="/login-fail" element={<Navigate replace to="/login" />} />
        <Route
          path="/teacherhome"
          element={
            <RequiredAuth>
              <TeacherHome />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
