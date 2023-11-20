import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStore } from "../store";
import { getMe } from "../utils/apiRequest";
import FullpageSpinner from "./FullpageSpinner";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const setUser = useStore((state) => state.setUser);
  const user = useStore((state) => state.user);

  useEffect(() => {
    (async () => {
      const result = await getMe();

      if (result.status === "success") {
        setUser(result.data.user);
      } else {
        setUser(null);
      }

      setLoading(false);
    })();
  }, []);

  if (loading) return <FullpageSpinner />;

  return !!user ? (
    allowedRoles?.includes(user.role) ? (
      <Outlet />
    ) : (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
