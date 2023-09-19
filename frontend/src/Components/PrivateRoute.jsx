import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GetUserQuery } from "../api/user";

const ProtectedRoute = () => {
  const data = GetUserQuery();
  console.log("Data1", data.data);
  const [user, setUser] = useState(true);

  useEffect(() => {
    setUser(data.data); // Move the setUser inside the useEffect callback
  }, [data.data]); // Place the dependencies array here

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
