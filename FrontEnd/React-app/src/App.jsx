import { SideNavbar } from "./SharedComponents/SideNavbar"
import { Accueil } from "./SharedPages/Accueil"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <SideNavbar />
      <Routes>
        <Route path="/" element={ <Accueil />} />
      </Routes>

    </div>
  )
}

export default App
