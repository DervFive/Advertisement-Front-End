import { useEffect, useState } from "react";
import SearchAndCategories from "../../../../components/SearchAndCategories";
import { apiDeleteAd, apiGetAds } from "../../../../services/products";
import { Link } from "react-router-dom";

const CustomerViewAdAll = () => {
  const [view, setView] = useState("grid");
  const [ads, setAds] = useState([]);
  const [order, setOrder] = useState(""); // Added order state for sorting functionality

  // Fetch all ads from backend
  const getAds = async (query = {}) => {
    try {
      const response = await apiGetAds({ params: query });
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAds();
  }, []);

  if (ads.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <div>

     
      {/* Toggle buttons for grid and list view */}
      <div className="btn-toggles flex justify-between items-center w-full">
        <select
          className="px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg"
          onChange={(e) => setOrder(e.target.value)} // Set order state on change
        >
          <option value="desc">Z-A</option>
          <option value="asc">A-Z</option>
          <option value="incr">Ghs 10-Ghs 200</option>
          <option value="incr+">Ghs 200+</option>
        </select>

        <span
          onClick={() => setView("grid")}
          className={`px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg ${
            view === "grid" ? "bg-[#EEC16D] text-white" : ""
          }`}
        >
          <i className="fa-solid fa-grip"></i>
        </span>

        <span
          onClick={() => setView("list")}
          className={`px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg ${
            view === "list" ? "bg-[#EEC16D] text-white" : ""
          }`}
        >
          <i className="fa-solid fa-list"></i>
        </span>
      </div>

      {/* Display ads based on grid or list view */}
      <div
        className={`${
          view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10" : "flex flex-col gap-4"
        } `}
      >
        {ads.map((ad) => (
          <Link to={""}>
          <div
            key={ad.id}
            className={`${
              view === "list"
                ? "w-full flex flex-col md:flex-row gap-4 p-4 border border-gray-300 rounded-lg"
                : "flex flex-col gap-4"
            }`}
          >
            <div className="img-container">
              <img
                src={`https://savefiles.org/${ad.image}?shareable_link=455}`}
                alt={ad.title}
                className={`${view === "list" ? "w-full md:w-1/3" : "max-w-full max-h-full"} rounded-lg`}
              />
            </div>

            <div className="flex flex-col gap-3 w-full">
              <p>Price: Ghs {ad.price}</p>
              <p>Category: {ad.category}</p>
              <p>Description: {ad.description}</p>
              <p>Business Name: {ad.user.businessName}</p>

              <div className="flex justify-around items-center gap-2">
                <button
                  onClick={() => handleDeleteAd(ad.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link to={`/vendor-dashboard/edit-Ad/${ad.id}`}>
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerViewAdAll;
