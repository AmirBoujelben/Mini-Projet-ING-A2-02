import Logo from "../assets/Logo.jpg"
import {Link} from "react-router-dom"
 
function LoginFormValidation(){
  
}

export default function LoginForm(){
  
  return(
    <div className="bg-white rounded-md w-max p-8 flex flex-col justify-center items-center h-max ">
        <img src={Logo} alt="" className="w-36"/>
        <h1 className=" text-lg">Bienvenue</h1>
        <p className="text-gray-400">Connectez-vous pour accéder à Votre Digital University</p> 
        <div className="mt-14 flex flex-col w-full">
            <label>E-mail</label>
            <input type="text" placeholder="username@collegename.ac.in" className="h-10 border border-gray-300 rounded-md px-4 py-2 "/>
        </div>
        <div className="mt-8 flex flex-col w-full">
            <label>Password</label>
            <input type="password" placeholder="Password" className="h-10 border border-gray-300 rounded-md px-4 py-2"/>
        </div>
        <div className="mt-8 flex">
            <div className="flex mr-5">
            <input type="checkbox" />
            <label >Se souvenir de moi</label>
            </div>
            <a href="" className="ml-5 underline hover:text-cyan-700">Mot de Passe oublié?</a>
        </div>
        <button  className="mt-8 border w-full h-10 rounded-lg bg-cyan-900 text-white"><Link to="/">Connexion</Link></button>
        <p className="mt-8 mb-10">Nouveau Utilisateur?<a href="" className="underline hover:text-cyan-700">Inscrivez-Vous!</a></p>
    </div>
  )
}
  
  