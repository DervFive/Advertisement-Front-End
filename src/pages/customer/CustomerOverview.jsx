
import { useEffect, useState } from "react";
import SearchAndCategories from "../../components/SearchAndCategories";
import SignButton from "../../components/SignButton";
import { apiGetAds } from "../../services/products";


const CustomerOverview = () => {

  const [view, setView] = useState("grid");
  const [ads, setAds] = useState([]);

   // Get all ads from backend
   const getAds = async (query = {}) => {
    try {
      const response = await apiGetAds({ params: query });
      console.log(response.data);
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
    <>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-4xl">TradeWave</h1>
        <div className="flex justify-center items-center gap-3">
          <p className="text-[14px]">Vendor or Customer?</p>
          <SignButton />
        </div>
      </div>

      <div className="hero w-full h-[100vh] rounded overflow-hidden">
        <div className="bg-[#00000077] w-full h-full flex justify-center items-center flex-col gap-3">
          <h1 className="text-3xl font-bold text-white">
            Find Quality Beauty Products, Faster!
          </h1>
          <div className="text-white text-sm">
            <p>
              Explore a world of unbeatable products from trusted vendors.
              Curated collections at your fingertips.
            </p>
          </div>
          <SearchAndCategories />
        </div>
      </div>

      <div className="btn-toggles flex justify-between items-center my-20">
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


      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10"
            : "flex flex-col gap-4"
        } mt-6 md:mt-14 overflow-auto`}
      >
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="flex flex-col gap-4 items-center p-4 bg-white rounded-lg shadow-lg"
          >
            <div className="img-container">
              <img
                src={`https://savefiles.org/${ad.image}?shareable_link=453`}
                alt={ad.title}
                className="max-w-full h-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-3 text-center md:text-left">
              <p className="text-md font-semibold">Price: Ghs {ad.price}</p>
              <p className="text-md">Category: {ad.category}</p>
              <p className="text-sm text-gray-600">
                Description: {ad.description}
              </p>


            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerOverview;
