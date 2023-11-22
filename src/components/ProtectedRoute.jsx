import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FullpageSpinner from "./FullpageSpinner";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const { loading, user } = useAuth();

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
