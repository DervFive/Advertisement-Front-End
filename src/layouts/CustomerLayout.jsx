import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const CustomerDashboard = () => {
  return (
    <>
      <section>
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
};

export default CustomerDashboard;
