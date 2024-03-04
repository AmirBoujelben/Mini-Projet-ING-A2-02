import UserContext from "../Context/UserContext"
import { useContext } from "react"

export const Accueil = () => {
  const user=useContext(UserContext)

  return (
    <div className="flex items-center">
      <p>Bienvenue cher {user.userEmail}</p>
    </div>
  )
}
