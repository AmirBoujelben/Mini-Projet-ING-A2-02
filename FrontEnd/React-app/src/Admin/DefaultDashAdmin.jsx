import { Outlet } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../Context/UserContext"

export const DefaultDashAdmin = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <h1>DefaultDashAdmin for {user.userEmail}</h1>
      <Outlet />
    </div>
  )
}
