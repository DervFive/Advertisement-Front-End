const SingleAdVendor = () => {

    return (
      <div className="min-h-screen flex bg-gray-100">
        <div className="flex-1 p-20">
          <div className="bg-white p-10 shadow-lg rounded-lg">
            
            
            <img src="" alt=""className="rounded-lg mb-6 w-full h-64 object-cover" />
      
          
            <h2 className="text-3xl font-bold mb-4">title</h2>
            
            <p className="text-gray-700 mb-6">description</p>
    
            
            <div className="flex justify-between items-center mb-6">
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
                category
              </span>
              <span className="text-lg font-semibold text-gray-800">
                price
              </span>
            </div>
    
            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Edit Ad
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete Ad
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    };
    export default SingleAdVendor