import { useEffect, useState } from "react";
import SearchAndCategories from "../../../../components/SearchAndCategories";
import { apiGetAds } from "../../../../services/products";

const VendorAdAll = () => {
  const [view, setView] = useState("grid");
  const [ads, setAds] = useState([]);

  //   This is to get all ads from backend
  const getAds = async (query = {}) => {
    try {
      const response = await apiGetAds({ params: query });


      console.log(response.data);
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(ads);
  useEffect(() => {
    getAds();
  }, []);

  if (ads.length < 1) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-20">My Products</h1>

      <div className="flex justify-center items-center">
        <SearchAndCategories />
      </div>

      {/* this is where the toggle buttons for grid and view is created */}

      <div className="btn-toggles flex justify-between items-center my-20">
        <select
         
          className="px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg"
        >
          <option  onClick={() => setOrder('asc')} value="A-Z">Z-A</option>
          <option  onClick={() => setOrder('desc')} value="A-Z">A-Z</option>
          <option  onClick={() => setOrder('incr')} value="A-Z">Ghs 10-Ghs 200</option>
          <option  onClick={() => setOrder('incr+')} value="A-Z">Ghs 200+</option>
        </select>

        <span
          onClick={() => setView("grid")}
          className="px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg"
        >
          <i class="fa-solid fa-grip"></i>
        </span>

        <span
          onClick={() => setView("list")}
          className="px-2 py-1 rounded bg-white hover:bg-[#EEC16D] hover:text-white duration-300 shadow-lg"
        >
          <i class="fa-solid fa-list"></i>
        </span>
      </div>

      {/* This is where all ADs by vendor is viewed */}

      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-4 gap-10"
            : "flex justify-center gap-4 "
        }  mt-14`}
      >
        {ads.map((ad, image) => (
          <div className="flex justify-center flex-col gap-4">
            <div key={ad.id} className="img-container">
              <img
                src={`https://savefiles.org/${image}?shareable_link=455}`}
                alt={ad.title}
                className="max-w-full max-h-full"
              />
            </div>

            <div className="flex justify-center flex-col gap-3 ">
              <p>Price: Ghs {ad.price}</p>
              <p>Category: {ad.category}</p>
              <p>Description: {ad.description}</p>

              <div className="flex justify-around items-center gap-2">
                <button>
                  <i class="fa-solid fa-trash"></i>
                </button>
                <button>
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorAdAll;
