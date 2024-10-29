import { useEffect, useState } from "react";
import { apiGetAds } from "../services/products";

const SearchAndCategories = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    const response = await apiGetAds();
    setCategory(response.data);
  };

  // this is to handle search
  const handleSearch = () => {
    onSearch({ searchTerm, category });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <div className="input-main-container flex justify-start items-start flex-row bg-white rounded-[5px] shadow-lg mb-9 ">
        <div className="sub-container flex flex-row gap-[10px] p-[5px]">
          <select value={category} onChange={(e) => setCategory(e.target.value)} name="" className="bg-transparent text-[12px] pr-[10px]">
            <option value="">All Categories</option>
            {category.map((op1) => (
              <option key={op1.id} value={op1.category}>
                {op1.category}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder=" search by title"
            className="bg-transparent text-[13px] border-l-black border-l-[2px] text-start p-2"
          />
          <button onClick={handleSearch} className="px-[20px] py-[5px] bg-[#1c3f3a] hover:bg-[#FF4500] duration-300 rounded-[5px] text-white text-[12px] animate-breathing">
            search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchAndCategories;
