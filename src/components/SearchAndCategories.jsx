import { useEffect, useState } from "react";
import { apiGetAds } from "../services/products";

const SearchAndCategories = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const response = await apiGetAds();
    setCategory(response.data);
  };

  // Handle search
  const handleSearch = () => {
    onSearch({ searchTerm, category });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="input-main-container flex flex-col md:flex-row justify-start items-start bg-white rounded-[5px] shadow-lg mb-6 md:mb-9 p-2">
        <div className="sub-container flex flex-col md:flex-row gap-3 md:gap-[10px] w-full">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-transparent text-[12px] p-2 md:pr-[10px] border border-gray-300 rounded md:w-auto w-full"
          >
            <option value="">All Categories</option>
            {category.map((op1) => (
              <option key={op1.id} value={op1.category}>
                {op1.category}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by title"
            className="bg-transparent text-[13px] border-l-black md:border-l-[2px] md:border-t-0 border-t-[2px] text-start p-2 w-full md:w-auto border-gray-300 rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-[#1c3f3a] hover:bg-[#FF4500] duration-300 rounded-[5px] text-white text-[12px] px-[20px] py-[5px] md:w-auto w-full"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchAndCategories;
