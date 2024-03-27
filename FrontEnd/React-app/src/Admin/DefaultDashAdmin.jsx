import { Outlet } from "react-router-dom"
import { SideNavbar } from "../SharedComponents/SideNavbar"

export const DefaultDashAdmin = () => {

  return (
    <div className="flex flex-row bg-[#EEFBFF]">
      <SideNavbar />
      <div className="my-12 w-screen mx-10">
        <Outlet />
      </div>
    </div>
  )
}
