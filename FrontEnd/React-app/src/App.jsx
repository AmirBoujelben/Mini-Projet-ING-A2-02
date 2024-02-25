import { SideNavbar } from "./SharedComponents/SideNavbar"
<<<<<<< HEAD

=======
import { Accueil } from "./SharedPages/Accueil"
import LoginPage from "./SharedPages/LoginPage";
import { Routes, Route } from 'react-router-dom';
>>>>>>> ffb68103df9ced6dd2de7824c6265ce4fcb0b7c7

function App() {
  return (
    <div>
<<<<<<< HEAD
      <SideNavbar />
      {/* <Routes>
        <Route path="/" element={ <Accueil />} />
      </Routes> */}

=======
      
      <Routes>
        <Route path="/" element={ <Accueil />} />
        <Route path="/Login" element={ <LoginPage />} />
      </Routes>
>>>>>>> ffb68103df9ced6dd2de7824c6265ce4fcb0b7c7
    </div>
  )
}

export default App
