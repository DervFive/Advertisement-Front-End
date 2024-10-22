import React from "react";

const VendorPost = () => {
  return (
    <div className=" vendor-post-img max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>

      <div className=" flex">
        {/* Left part of the form */}
        <div className="w-1/2 pr-6">
          <form>
            <div className="mb-4">
              <label className=" text-white block font-bold mb-2">
                Product Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="text"
                id="productName"
                name="productName"
                required
              />
            </div>

            <div className="mb-4">
              <label className=" text-white block font-bold mb-2">
                Price (GHS)
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="text"
                id="price"
                name="price"
                required
              />
            </div>

            <div className="mb-4">
              <label className=" text-white block font-bold mb-2">
                Category
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                id="category"
                name="category"
                required
              >
                <option value="">Select a Category</option>
                <option value="skincare">Skin Care</option>
                <option value="makeup">Makeup</option>
                <option value="haircare">Hair Care</option>
                <option value="fragrances">Fragrances</option>
              </select>
            </div>
          </form>
        </div>

        {/* Vertical Line goes here */}
        <div className="border-l-2 border-gray-300 h-auto"></div>

        {/* Right Side of the form */}
        <div className="w-1/2 pl-6">
          <div className="mb-4">
            <label className=" text-white block font-bold mb-2">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              id="description"
              name="description"
              rows="4"
              required
            />
          </div>

          <div className="mb-4">
            <label className=" text-white block font-bold mb-2">
              Product Image
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
            />
          </div>

          <div className="text-center">
            <button className="bg-[#EEC16D] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPost;