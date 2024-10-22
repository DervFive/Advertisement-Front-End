import { Outlet } from "react-router-dom";


const CustomerDashboard = () => {
  return (
    <>
      <section className="homepage h-[calc(100vh-30px)] m-[15px] rounded-xl shadow-2xl overflow-hidden p-3">
        <div className=" flex justify-center items-center flex-col gap-5 w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300 mt-auto">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default CustomerDashboard;
