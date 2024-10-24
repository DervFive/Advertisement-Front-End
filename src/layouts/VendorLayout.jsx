import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const VendorLayouts = () => {
  return (
    <>
      <section className="flex h-[calc(100vh-30px)] m-[15px] rounded-xl shadow-2xl overflow-hidden bg-white">
        <Sidebar />
        <div className=" flex justify-center items-center ml-auto w-full h-full bg-[#edd7ae88] overflow-auto p-11 scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300 ">
          <div className=" mt-auto w-full">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorLayouts;
