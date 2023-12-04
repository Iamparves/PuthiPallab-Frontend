import React from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FullpageSpinner from "./FullpageSpinner";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const { loading, user } = useAuth();
  const context = useOutletContext();

  if (loading) return <FullpageSpinner />;

  return !!user ? (
    allowedRoles?.includes(user.role) ? (
      <Outlet context={context} />
    ) : (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    )
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
