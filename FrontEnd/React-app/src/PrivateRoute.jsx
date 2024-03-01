import { useContext } from 'react';
import UserContext from './Context/UserContext';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user } = useContext(UserContext);

  return user && user.userEmail ? children : <Navigate to="/Login" />;
}

export default PrivateRoute;
