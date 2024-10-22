const SearchAndCategories = () => {
  return (
   <>
    <div className="input-main-container flex justify-start items-start flex-row bg-white rounded-[5px] shadow-lg mb-9 ">
      <div className="sub-container flex flex-row gap-[10px] p-[5px]">
        <select name="genre" className="bg-transparent text-[12px] pr-[10px]">
          <option value="">All Categories</option>
        </select>

        <input
          type="text"
          placeholder=" search by title, category..."
          className="bg-transparent text-[13px] border-l-black border-l-[2px] text-start p-2"
        />
        <button className="px-[20px] py-[5px] bg-[#1c3f3a] hover:bg-[#FF4500] duration-300 rounded-[5px] text-white text-[12px] animate-breathing">
          search
        </button>
      </div>
    </div>
   </>
  );
};

export default SearchAndCategories;
