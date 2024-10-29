import { useEffect, useState } from "react";
import SearchAndCategories from "../../../../components/SearchAndCategories";
import { apiDeleteAd, apiGetVendorAds } from "../../../../services/products";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const VendorAdAll = () => {
  const [view, setView] = useState("grid");
  const [ads, setAds] = useState([]);
  const [isLoading, setLoading] = useState(false)

  // Get all ads from backend
  const getVendorAds = async (query = {}) => {
    try {
      setLoading(true)
      const response = await apiGetVendorAds({ params: query });
      console.log(response.data);
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  };

  // Delete an ad
  const handleDeleteAd = async (adId) => {
    try {
      const response = await apiDeleteAd(adId);
      console.log("ad deleted", response.data);
      toast.success('Ad Deleted Successfully')
      getVendorAds();
    } catch (error) {
      console.error("error deleting ad", error.response.data);
      toast.error('Ad Failed to Delete')
    }
  };

  useEffect(() => {
    getVendorAds();
  }, []);



  return (
    <div className="p-4 md:p-8">
      {isLoading ? "Loading" : ""}
      <h1 className="text-xl md:text-2xl font-bold mb-6 md:mb-20 text-center md:text-left">
        My Products
      </h1>

      <div className="flex justify-center md:justify-start items-center mb-6">
        <SearchAndCategories onSearch={getVendorAds} />
      </div>

      {/* Toggle buttons for grid and list view */}
      <div className="btn-toggles flex justify-between items-center my-6 md:my-20">
        <select className="px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg">
          <option onClick={() => setOrder("asc")} value="A-Z">
            Z-A
          </option>
          <option onClick={() => setOrder("desc")} value="A-Z">
            A-Z
          </option>
          <option onClick={() => setOrder("incr")} value="A-Z">
            Ghs 10-Ghs 200
          </option>
          <option onClick={() => setOrder("incr+")} value="A-Z">
            Ghs 200+
          </option>
        </select>

        <span
          onClick={() => setView("grid")}
          className={`px-2 py-1 rounded bg-[white] hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg ${
            view === "grid" ? "bg-[#f37f51] text-black" : ""
          }`}
        >
          <i className="fa-solid fa-grip"></i>
        </span>

        <span
          onClick={() => setView("list")}
          className={`px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg ${
            view === "list" ? "bg-[#f37f51] text-black" : ""
          }`}
        >
          <i className="fa-solid fa-list"></i>
        </span>
      </div>

      {/* Display ads in grid or list view */}
      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10"
            : "flex flex-col gap-4"
        } mt-6 md:mt-14 overflow-auto`}
      >
        {ads.map((ad) => (
          <div
            key={ad.user.id}
            className={`${
              view === "list"
                ? "w-full flex flex-col md:flex-row gap-4 p-4 border-gray-300 rounded-lg bg-white"
                : "flex flex-col gap-4 p-4 border-gray-300 rounded-lg bg-white"
            }`}
          >
            <div className="img-container">
              <img
                src={`https://savefiles.org/${ad.image}?shareable_link=453`}
                alt={ad.title}
                className={`${view === "list" ? "max-w-full md:w-1/3" : "max-w-full max-h-full"} rounded-lg`}
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <p className="text-md font-semibold">Price: Ghs {ad.price}</p>
              <p className="text-md">Category: {ad.category}</p>
              <p className="text-sm text-gray-600">
                Description: {ad.description}
              </p>

              <div className="flex justify-around items-center gap-2">
                <button
                  onClick={() => handleDeleteAd(ad.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>

                <Link to={`/vendor-dashboard/edit-AD/${ad.id}`}>
                  <button className="text-blue-500 hover:text-blue-700">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorAdAll;
