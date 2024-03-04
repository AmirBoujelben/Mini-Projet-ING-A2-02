import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

  const userData = JSON.parse(sessionStorage.getItem("user"));

  const isAuthenticated =  userData.userPassword && userData.userEmail;
  
  return isAuthenticated ? children : <Navigate to="/Login" />;
}

export default PrivateRoute;
