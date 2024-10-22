
import AdvertCard from "./AdvertCard";

const Grid = () => {
  return (
    <div className="products-display grid grid-cols-4 gap-5 w-full overflow-auto mt-auto scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300">
      <AdvertCard />
    </div>
  );
};

export default Grid;
