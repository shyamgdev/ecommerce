import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated == false) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
