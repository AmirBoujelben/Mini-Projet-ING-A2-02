import { SideNavbar } from "../SharedComponents/SideNavbar"
import { useContext } from "react"
import UserContext from "../Context/UserContext"

export const Accueil = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div className="flex items-center">
      <p>Bienvenue cher {user.userEmail}</p>
    </div>
  )
}
