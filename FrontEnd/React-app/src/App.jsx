import { SideNavbar } from "./SharedComponents/SideNavbar"
import { Accueil } from "./SharedPages/Accueil"
import LoginPage from "./SharedPages/LoginPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={ <Accueil />} />
        <Route path="/Login" element={ <LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
