import { Outlet } from "react-router-dom"
import { SideNavbar } from "../SharedComponents/SideNavbar"

export const DefaultDashEnseig = () => {
  return (
    <div>
      <SideNavbar />
      <Outlet />
    </div>
  )
}
