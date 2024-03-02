import { Outlet } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../Context/UserContext"

export const DefaultDashEnseig = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <SideNavbar/>
      <h1>DefaultDashEtud for {user.userEmail}</h1>
      <Outlet />
    </div>
  )
}
