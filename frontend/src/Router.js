import { Route, Navigate } from "react-router-dom";
import Home from "@Pages/Home";
import Page404 from "@Pages/Page404";
import Login from "@Pages/Login";
import TeacherHome from "@Pages/Teacher/TeacherHome.jsx";
import Logout from "@Pages/Logout";
import Team from "@Pages/Team";
import Settings from "@Pages/Settings";

export const UnAuthorizedUsersRoutes = (currentUser) => {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-fail" element={<Navigate replace to="/login" />} />
      <Route
        path="/login-success"
        element={<Navigate replace to="/teacherhome" />}
      />
      <Route path="/logout" element={<Logout />} />
      <Route path="/Team" element={<Team />} />
      <Route path="*" element={<Page404 />} />
    </>
  );
};

export const AuthorizedUsersRoutes = (currentUser) => {
  return (
    <>
      <Route path="/Settings" element={<Settings user={currentUser} />} />
      <Route
        path="/login-success"
        element={<Navigate replace to="/teacherhome" />}
      />
      <Route path="/teacherhome" element={<TeacherHome user={currentUser} />} />{" "}
      <Route path="/login" element={<TeacherHome />} />
      {UnAuthorizedUsersRoutes(currentUser)}
    </>
  );
};
