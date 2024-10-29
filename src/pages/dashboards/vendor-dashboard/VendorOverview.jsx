import { Link } from "react-router-dom";
import SearchAndCategories from "../../../components/SearchAndCategories";

const VendorOverview = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-4 md:p-8">
      <h1 className="mb-5 text-2xl md:text-4xl font-bold text-center">
        Welcome
      </h1>
      <SearchAndCategories />

      <div className="dash grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link to={"/vendor-dashboard/vendor-ADs"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-brands fa-product-hunt"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">My Products</p>
          </div>
        </Link>

        <Link to={"/vendor-dashboard/vendor-orders"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-solid fa-cart-flatbed-suitcase"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">Orders</p>
          </div>
        </Link>

        <Link to={"/vendor-dashboard/add-AD"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-solid fa-folder-plus"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">Add Product</p>
          </div>
        </Link>

        <Link to={"/vendor-dashboard/vendor-coupons"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-solid fa-gift"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">Coupons</p>
          </div>
        </Link>

        <Link to={"/vendor-dashboard/vendor-reviews"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-solid fa-thumbs-up"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">Reviews</p>
          </div>
        </Link>

        <Link to={"/vendor-dashboard/about"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-solid fa-circle-info"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">About</p>
          </div>
        </Link>

        <Link to={"/vendor-dashboard/support"}>
          <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
            <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
              <i className="fa-solid fa-circle-question"></i>
            </div>
            <p className="font-bold text-xs sm:text-sm">Support</p>
          </div>
        </Link>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-105 transition-transform duration-300">
          <div className="icon-container text-3xl sm:text-4xl lg:text-5xl p-10 sm:p-16 lg:p-20 bg-slate-50 rounded shadow-lg">
            <i className="fa-solid fa-gear"></i>
          </div>
          <p className="font-bold text-xs sm:text-sm">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default VendorOverview;
