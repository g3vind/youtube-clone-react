import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default HomePage;
