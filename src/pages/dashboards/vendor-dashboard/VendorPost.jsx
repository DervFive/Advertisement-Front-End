import React from "react";
import { apiPostAds } from "../../../services/products";
import { toast } from "react-toastify";

const VendorPost = () => {
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);

      const response = await apiPostAds({
        title: formData.get("title"),
        price: formData.get("price"),
        category: formData.get("category"),
        description: formData.get("description"),
        image: formData.get("image"),
      });
      console.log(response.data);
      toast.success('Successful')
    } catch (error) {
      console.log(error)
      toast.error('Failed')
    }
  };

  return (
    <div className="flex justify-center items-center flex-col vendor-post-img max-w-4xl h-screen  mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className=" flex">
          {/* Left part of the form */}
          <div className="w-1/2 pr-6">
            <div className="mb-4">
              <label className=" text-white block font-bold mb-2">
                Product Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                type="text"
                name="title"
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
          </div>

          {/* Vertical Line goes here */}
          <div className="border-l-2 border-[#fcfcfc] h-auto"></div>

          {/* Right Side of the form */}
          <div className="w-1/2 pl-6">
            <div className="mb-4">
              <label className=" text-white block font-bold mb-2">
                Description
              </label>
              <textarea
                className=" text-sm w-full px-3 py-2 border border-gray-300 rounded-lg scrollbar-thin scrollbar-thumb-[#ebd451e1] scrollbar-track-gray-300"
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
                name="image"
                accept="image/*"
                required
              />
            </div>

            <div className="text-center">
              <button className="bg-[#EEC16D] hover:bg-white duration-300 hover:text-[#EEC16D] text-white font-semibold py-2 px-4 rounded-lg">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VendorPost;
