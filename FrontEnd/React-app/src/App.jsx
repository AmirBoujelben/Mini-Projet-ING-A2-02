import { AccueilAdmin } from "./Admin/AccueilAdmin";
import { DefaultDashAdmin } from "./Admin/DefaultDashAdmin";
import { Accueil } from "./SharedPages/Accueil"
import LoginPage from "./SharedPages/LoginPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/AdminDashboard" element={<DefaultDashAdmin />}>
          <Route index element={<AccueilAdmin />} />
        </Route>
        
        <Route path="/" exact element={ <Accueil />} />
        <Route path="/Login" element={ <LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
