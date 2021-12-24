import { React } from "react";
import { Navigate } from "react-router-dom";

async function getUser() {
  const res = await fetch("/api/userinfo");
  return res.json();
}

export default function RequiredAuth({ children }) {
  const resJson = getUser();
  const a = resJson.then((data) => {
    if (data.user == null) {
      return <Navigate replace to="/login" />;
    }
    return children;
  });
  console.log(a);
}
