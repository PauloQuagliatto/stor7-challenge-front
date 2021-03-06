import { Navigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
