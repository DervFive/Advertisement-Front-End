import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGetSingleAd, apiUpdateAd } from "../../../services/products";
import { toast } from "react-toastify";

const VendorEdit = () => {
  // this is to get AD id from the route params
  const { adId } = useParams();

  // After a successful message redirect to the vendor Dashboard
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // this isn to fetch existing ad when the component mounts

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const fetchAd = async () => {
    setIsLoading(true);
    try {
      const response = await apiGetSingleAd(adId);
      const { title, description, price, category } = response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setCategory(category);
    } catch (error) {
      console.error("error fetching ad", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAd();
  }, []);

  // this is to handle the update submision
  const handleSubmit = async (e) => {
    e.preventDefault();

    // this is to prepare form data to be sent to backend
    const formData = new FormData(e.target);
    try {
      const response = await apiUpdateAd(adId, formData);

      console.log("ad updated", response.data);
      toast.success("Ad Updated Successfully");
      navigate("/vendor-dashboard/vendor-ADs");
    } catch (error) {
      console.error("error updating ad", error.response.data);
      toast.error("Failed to Update Ad");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-center items-center flex-col vendor-edit-img max-w-4xl h-screen  mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Edit AD
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
                    defaultValue={title}
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
                    defaultValue={price}
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
                    value={category}
                    onChange={handleChange}
                  >
                    <option value="">Select a Category</option>
                    <option value="skincare">Skin Care</option>
                    <option value="makeup">Makeup</option>
                    <option value="haircare">Hair Care</option>
                    <option value="fragrance">Fragrances</option>
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
                    defaultValue={description}
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
                    defaultValue={image}
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#EEC16D] hover:bg-[#23589E] duration-300 hover:text-[white] hover:border hover:border-[white] text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Edit Ad
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default VendorEdit;
