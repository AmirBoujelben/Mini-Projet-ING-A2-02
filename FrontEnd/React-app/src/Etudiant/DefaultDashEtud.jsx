import { Outlet } from "react-router-dom";
import { SideNavbar } from "../SharedComponents/SideNavbar";

export const DefaultDashEtud = () => {
  return (
    <div>
      <SideNavbar />
      <Outlet />
    </div>
  );
};
