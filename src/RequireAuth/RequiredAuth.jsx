import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem('auth') === 'true'; // Example check
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;

RequireAuth.propTypes = {
	children: PropTypes.node.isRequired,
};



