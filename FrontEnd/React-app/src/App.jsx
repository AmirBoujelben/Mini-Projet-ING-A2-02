import UserProvider from "./Context/UserProvider";
import PrivateRoute from './PrivateRoute';
import { Routes, Route } from "react-router-dom";

//********   imports for Admin   *********// 
import { DefaultDashAdmin } from "./Admin/DefaultDashAdmin";
import { AccueilAdmin } from "./Admin/AccueilAdmin";
import { Profile } from "./SharedPages/Profile"
import { AdminGestDep } from "./Admin/AdminGestDep";
import { AdminGestEnseig } from "./Admin/AdminGestEnseig";
import { AdminGestEtud } from "./Admin/AdminGestEtud";
import { AdminGestEvent } from "./Admin/AdminGestEvent";

//********   imports for Chef Dep   *********// 
import { Accueil } from "./SharedPages/Accueil";
import { ChefDepGestFiliere } from "./ChefDep/ChefDepGestFiliere";
import { ChefDepGestEmploiEnseig } from "./ChefDep/ChefDepGestEmploiEnseig";
import { ChefDepGestEmploiEtud } from "./ChefDep/ChefDepGestEmploiEtud";
import { ChefDepGestEvent } from "./ChefDep/ChefDepGestEvent";

//********   imports for Enseignant   *********// 
import { DefaultDashEnseig } from "./Enseignant/DefaultDashEnseig";
import { Emploi } from "./SharedPages/Emploi";
import { EnseigConsultGroupe } from "./Enseignant/EnseigConsultGroupe";
import { EnseigGestCours } from "./Enseignant/EnseigGestCours";
import { EnseigGestNote } from "./Enseignant/EnseigGestNote";
import { EnseigGestRattrapage } from "./Enseignant/EnseigGestRattrapage";
import { Event } from "./SharedPages/Event";

//********   imports for Etudiant   *********// 
import { DefaultDashEtud } from "./Etudiant/DefaultDashEtud";
import { EtudGroup } from "./Etudiant/EtudGroup";
import { EtudCours } from "./Etudiant/EtudCours";
import { EtudNote } from "./Etudiant/EtudNote";
import { EtudRattrapage } from "./Etudiant/EtudRattrapage";


import LoginPage from "./SharedPages/LoginPage";


function App() {
  
  return (
  <UserProvider>
      <Routes>
      <Route path="/Login" element={<LoginPage />} />
      
        <Route path="/AdminDashboard" element={<PrivateRoute><DefaultDashAdmin /></PrivateRoute>}>
          <Route index element={<AccueilAdmin />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="GestionDepartement" element={<AdminGestDep />} />
          <Route path="GestionEnseignant" element={<AdminGestEnseig />} />
          <Route path="GestionEtudiant" element={<AdminGestEtud />} />
          <Route path="GestionEvenement" element={<AdminGestEvent />} />
        </Route>

        <Route path="/ChefDepartementDashboard" element={<PrivateRoute><DefaultDashEnseig /></PrivateRoute>}>
          <Route index element={<Accueil />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="GestionFiliere" element={<ChefDepGestFiliere />} />
          <Route path="GestionEmploiDeTempsEnseignant" element={<ChefDepGestEmploiEnseig />} />
          <Route path="GestionEmploiDeTempsEtudiant" element={<ChefDepGestEmploiEtud />} />
          <Route path="GestionEvenenment" element={<ChefDepGestEvent />} />
        </Route>

        <Route path="/EnseignantDashboard" element={<PrivateRoute><DefaultDashEnseig /></PrivateRoute>}>
          <Route index element={<Accueil />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="EmploiDeTemps" element={<Emploi />} />
          <Route path="ListeDesGroupes" element={<EnseigConsultGroupe />} />
          <Route path="GestionDeCours" element={<EnseigGestCours />} />
          <Route path="GestionDesNotes" element={<EnseigGestNote />} />
          <Route path="GestionDeRattrapage" element={<EnseigGestRattrapage />} />
          <Route path="Evenement" element={<Event />} />
        </Route>

        <Route path="/Etudiant" element={<PrivateRoute><DefaultDashEtud /></PrivateRoute>}>
          <Route index element={<Accueil />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="EmploiDeTemps" element={<Emploi />} />
          <Route path="ListeDeGroupe" element={<EtudGroup />} />
          <Route path="SupportDeCours" element={<EtudCours />} />
          <Route path="Notes" element={<EtudNote />} />
          <Route path="Rattrapage" element={<EtudRattrapage />} />
          <Route path="Evenement" element={<Event />} />
        </Route>

      </Routes>
    </UserProvider>
  )
}

export default App;
