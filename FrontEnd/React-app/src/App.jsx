import { useContext } from "react";
import UserContext from "./Context/UserContext";
import UserProvider from "./Context/UserProvider";
import { Accueil } from "./SharedPages/Accueil"
import LoginPage from "./SharedPages/LoginPage";
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
  
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute><Accueil/></PrivateRoute>}/>
        <Route path="/Login" element={<LoginPage/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
