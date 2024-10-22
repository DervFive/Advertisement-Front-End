import { useState } from "react";

const Filter =() => ({ options, onFilterChange }) => {
    
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (filter) => {
      let updatedFilters = [...selectedFilters];

      if (updatedFilters.includes(filter)) {
        updatedFilters = updatedFilters.filter((f) => f !== filter);
      } else {
        updatedFilters.push(filter);
      }

      setSelectedFilters(updatedFilters);
      onFilterChange(updatedFilters); 
    };

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option}
              className={`px-4 py-2 rounded-lg ${
                selectedFilters.includes(option)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleFilterChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

export default Filter;
