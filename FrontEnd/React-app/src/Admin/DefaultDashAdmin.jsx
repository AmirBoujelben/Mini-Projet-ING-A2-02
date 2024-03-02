import { Outlet } from "react-router-dom"
import { SideNavbar } from "../SharedComponents/SideNavbar"

export const DefaultDashAdmin = () => {

  return (
    <div>
      <SideNavbar />
      <Outlet />
    </div>
  )
}
