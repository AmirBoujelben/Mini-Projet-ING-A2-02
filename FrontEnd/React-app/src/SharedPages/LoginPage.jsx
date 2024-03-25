import LoginForm from "../SharedComponents/LoginForm"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage(){

    const navigate = useNavigate()
    const user = JSON.parse(sessionStorage.getItem("user"))

    useEffect(()=>{
        if (user && user.userRole === "etudiant") {
            console.log("Already Logged In, Navigating to /Etudiant"); // Log a message
            navigate("/Etudiant");
          }
          if (user && user.userRole === "admin") {
            console.log("Already Logged In, Navigating to /AdminDashboard"); // Log a message
            navigate("/AdminDashboard");
          }
          if (user && user.userRole === "enseignant") {
            console.log("Already Logged In, Navigating to /EnseignantDashboard"); // Log a message
            navigate("/EnseignantDashboard");
          }
          if (user && user.userRole=== "chefDepartement") {
            console.log("Already Logged In, Navigating to /ChefDepartementDashboard"); // Log a message
            navigate("/ChefDepartementDashboard");
          }
    },[])

    
    return (
    <div className="bg-blue-100 flex justify-center items-center h-screen">
        <LoginForm />
    </div>
    
    )
} 