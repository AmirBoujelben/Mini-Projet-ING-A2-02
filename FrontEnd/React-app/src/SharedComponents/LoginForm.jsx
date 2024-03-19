import { useState } from "react";
import Logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  const navigate = useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [userRole, setUserRole] = useState('Admin');

  const handleOnChange = (e) => {
    setUserRole(e.target.value);
  }

  const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:5700/user/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
  
    if (!response.ok) {
      throw new Error('Login failed!');
    }
  
    const data = await response.json();
    return data;
  };


  const handleLogin = (e, User) => {
    e.preventDefault() // Prevent form submission

    console.log(User); // Log the User object

    loginUser(User.userEmail, User.userPassword)
    .then(data => {
      console.log(data); // { token, userId, userEmail, userAvatar, userRole}
      sessionStorage.setItem("user",JSON.stringify(data))
      if (data.userRole === "etudiant") {
        console.log("Navigating to /Etudiant"); // Log a message
        navigate("/Etudiant");
      }
      if (data.userRole === "admin") {
        console.log("Navigating to /AdminDashboard"); // Log a message
        navigate("/AdminDashboard");
      }
      if (data.userRole === "enseignant") {
        console.log("Navigating to /EnseignantDashboard"); // Log a message
        navigate("/EnseignantDashboard");
      }
      if (data.userRole=== "chefDepartment") {
        console.log("Navigating to /ChefDepartementDashboard"); // Log a message
        navigate("/ChefDepartementDashboard");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    

  }
  


  return (
    <div className="bg-white rounded-md w-max m-4 p-8 flex flex-col justify-center items-center">
      <img src={Logo} alt="" className="w-36" />
      <h1 className=" text-lg">Bienvenue</h1>
      <p className="text-gray-400">
        Connectez-vous pour accéder à Votre Digital University
      </p>
      <div className="mt-10 flex flex-col w-full">
        <label>E-mail</label>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="username@collegename.ac.in"
          className="h-10 border border-gray-300 rounded-md px-4 py-2 "
        />
      </div>
      <div className="mt-2 flex flex-col w-full">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          className="h-10 border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
      {/* <div className="mt-4 w-full">
      <label>Role</label>
      <select className="w-full border border-gray-300 rounded-md px-4 py-2" name="role" value={userRole} onChange={handleOnChange}>
        <option value="Admin">Admin</option>
        <option value="Enseignant">Enseignant</option>
        <option value="Etudiant">Etudiant</option>
        <option value="ChefDepartment">Chef Department</option>
      </select>
      </div> */}
      <div className="mt-8 flex">
        <div className="flex mr-5">
          <input type="checkbox" />
          <label>Se souvenir de moi</label>
        </div>
        <a href="" className="ml-5 underline hover:text-cyan-700">
          Mot de Passe oublié?
        </a>
      </div>

          <button 
          className="flex flex-row justify-center items-center mt-8 border w-full h-10 rounded-lg bg-cyan-900 text-white" 
          onClick={(e)=>handleLogin(e, {userEmail:email,userPassword:password,Role:userRole})}>
            Connexion
          </button>

      <p className="mt-8 mb-4">
        Nouveau Utilisateur?
        <a href="" className="underline hover:text-cyan-700">
          Inscrivez-Vous!
        </a>
      </p>
    </div>
  );
}
