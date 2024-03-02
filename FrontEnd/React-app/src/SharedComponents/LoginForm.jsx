import { useState } from "react";
import Logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext"
import { useContext } from "react";

export default function LoginForm() {

  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleUpdateUser = (e, newUser) => {
    e.preventDefault() // Prevent form submission
    sessionStorage.setItem("user", JSON.stringify(newUser))
    setUser(newUser)
    navigate("/Etudiant") 
  }
  




  return (
    <div className="bg-white rounded-md w-max p-8 flex flex-col justify-center items-center h-max ">
      <img src={Logo} alt="" className="w-36" />
      <h1 className=" text-lg">Bienvenue</h1>
      <p className="text-gray-400">
        Connectez-vous pour accéder à Votre Digital University
      </p>
      <div className="mt-14 flex flex-col w-full">
        <label>E-mail</label>
        <input
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="username@collegename.ac.in"
          className="h-10 border border-gray-300 rounded-md px-4 py-2 "
        />
      </div>
      <div className="mt-8 flex flex-col w-full">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          className="h-10 border border-gray-300 rounded-md px-4 py-2"
        />
      </div>
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
          onClick={(e)=>handleUpdateUser(e, {userEmail:email,userPassword:password})}>
            Connexion
          </button>

      <p className="mt-8 mb-10">
        Nouveau Utilisateur?
        <a href="" className="underline hover:text-cyan-700">
          Inscrivez-Vous!
        </a>
      </p>
    </div>
  );
}
