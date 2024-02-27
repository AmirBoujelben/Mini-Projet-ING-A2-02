import { SideNavbar } from "./SharedComponents/SideNavbar"
import { Accueil } from "./SharedPages/Accueil"
import LoginPage from "./SharedPages/LoginPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  const user=false;
  return (
      
      <Routes>
        <Route path="/" element={user?<Accueil/> : <LoginPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
      </Routes>
  )
}

export default App
