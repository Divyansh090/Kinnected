import DashboardNavbar from "./dashboardNavbar";
import { RootSidebar } from "./rootSidebar";

export default function LayoutFile(){
    return (
        <div className="flex justify-start">
              <RootSidebar/>
              <DashboardNavbar/>
        </div>
    )
}