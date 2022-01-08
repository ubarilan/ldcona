import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserInfo } from "@Lib/utils";
import Navbar from "@Components/Navbar";

import { UnAuthorizedUsersRoutes, AuthorizedUsersRoutes } from "./Router";

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
      <Navbar user={currentUser} />
      <Routes>
        {currentUser
          ? AuthorizedUsersRoutes(currentUser)
          : UnAuthorizedUsersRoutes(currentUser)}
      </Routes>
    </Router>
  );
}
