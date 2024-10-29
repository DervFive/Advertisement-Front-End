
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

      <div className="hero w-full h-screen] rounded overflow-auto px-7">
        <div className=" w-full h-screen flex justify-center items-center flex-col gap-3">
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
            view === "grid" ? "bg-[#f09f7a] text-black" : ""
          }`}
        >
          <i className="fa-solid fa-grip"></i>
        </span>

        <span
          onClick={() => setView("list")}
          className={`px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg ${
            view === "list" ? "bg-[#f09f7a] text-black" : ""
          }`}
        >
          <i className="fa-solid fa-list"></i>
        </span>
      </div>
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
                className="max-w-full h-auto rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-3 text-center md:text-left">
              <h1>Title: {ad.title}</h1>
              <p className="text-md font-semibold">Price: Ghs {ad.price}</p>
              <p className="text-md">Category: {ad.category}</p>
              <p className="text-sm text-gray-600">
                Description: {ad.description}
              </p>
              <p>Business Name: {ad.user.businessName}</p>


            </div>
          </div>
        ))}
      </div>
      </div>

      


    </>
  );
};

export default CustomerOverview;
