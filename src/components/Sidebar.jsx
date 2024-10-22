import { useState } from "react";
import logo from "../assets/images/trade-wave-logo.jpeg";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar flex flex-col gap-2 h-screen w-[15%] px-2 py-6 fixed overflow-auto ${
        isExpanded ? "w-[15%]" : "w-[5%]"
      } transition-width duration-300 ease-in-out relative scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300 `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className=" logo flex justify-center flex-col items-center gap-2">
        <div className=" w-[40%] mx-auto">
          <img
            className={`max-w-full rounded-full`}
            src={logo}
            alt="TradeWave logo"
          />
        </div>
        <p className={`${isExpanded ? "block" : "hidden"}`}>
          {" "}
          <span className="text-3xl">T</span>rade{" "}
          <span className="text-3xl">W</span>ave
        </p>
      </div>

      <hr className="mt-5 mb-5 h-2" />

      <div className="links text-[0.8rem]">
        <div className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}>
          <span className="">
            <i class="fa-solid fa-house"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Home</p>
        </div>
      </div>

      <div className="links text-[0.8rem]">
        <div className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}>
          <span className="">
            <i class="fa-brands fa-product-hunt"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Products</p>
        </div>
      </div>

      <div className="links text-[0.8rem]">
        <div className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}>
          <span className="">
            <i class="fa-solid fa-cart-flatbed-suitcase"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Orders</p>
        </div>
      </div>

      <div className="links text-[0.8rem]">
        <div className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}>
          <span className="">
            <i class="fa-solid fa-folder-plus"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Add Product</p>
        </div>
      </div>

      <div className="links text-[0.8rem]">
        <div className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}>
          <span className="">
            <i class="fa-solid fa-gift"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Coupons</p>
        </div>
      </div>

      <div className="links text-[0.8rem]">
        <div className={`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}>
          <span className="">
            <i class="fa-solid fa-thumbs-up"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Reviews</p>
        </div>
      </div>

      <div className="links text-[0.8rem]">
        <div className= {`flex ${isExpanded ? 'justify-start' : 'justify-center'} bg-[#EEC16D] rounded-md p-2`}  >
          <span className="">
            <i class="fa-solid fa-gear"></i>
          </span>
          <p className={`${isExpanded ? "block" : "hidden"} ml-2`}>Settings</p>
        </div>
      </div>

      <hr className="mt-5 mb-5 h-2" />


        <div className="profile  ">
          <div className="here w-[100% ] rounded-[50%]">
            <p>profile goes here</p>
          </div>
        </div>

        <p>Log Out</p>
    </div>
  );
};

export default Sidebar;
