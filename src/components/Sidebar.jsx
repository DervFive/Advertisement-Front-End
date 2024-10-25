import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`sidebar flex flex-col gap-2 h-screen w-[20%] md:w-[15%] sm:w-[5%] px-2 py-6 fixed overflow-auto ${
        isExpanded ? "w-[20%] md:w-[15%]" : "w-[8%] md:w-[5%]"
      } transition-width duration-300 ease-in-out relative scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300 `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Link to={"/"}>
        <div className="logo text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#f0d39d] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-tornado"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 `}
            >
              TradeWave
            </p>
          </div>
        </div>
      </Link>

      <hr className="mt-5 mb-5 h-2" />

      <Link to={"/vendor-dashboard"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-house"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 `}
            >
              Home
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/vendor-ADs"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-brands fa-product-hunt"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              My Products
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/vendor-orders"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Orders
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/add-AD"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-folder-plus"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Add Product
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/vendor-coupons"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-gift"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Coupons
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/vendor-reviews"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-thumbs-up"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Reviews
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/about"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
            <i className="fa-solid fa-circle-info"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              About
            </p>
          </div>
        </div>
      </Link>

      <Link to={"/vendor-dashboard/vendor-settings"}>
        <div className="links text-[0.8rem]">
          <div
            className={`flex ${
              isExpanded ? "justify-start" : "justify-center"
            } bg-[#EEC16D] rounded-md p-2`}
          >
            <span className="">
              <i class="fa-solid fa-gear"></i>
            </span>
            <p
              className={`${
                isExpanded ? "block" : "hidden"
              } ml-2 relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              Settings
            </p>
          </div>
        </div>
      </Link>

      <hr className="mt-5 mb-5 h-2" />

      <div className="profile">
        <div className="here w-[100% ] rounded-[50%]">
          <p>profile goes here</p>
        </div>
      </div>

      <p className={`${isExpanded ? "block" : "hidden"}`}>Log Out</p>
    </div>
  );
};

export default Sidebar;
