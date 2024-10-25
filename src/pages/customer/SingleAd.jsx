import { useEffect, useState } from "react";
import { apiGetSingleAd } from "../../services/products";
import { useParams } from "react-router-dom";

const SingleAd = () => {
  const { id } = useParams();

  const [ad, setAd] = useState({});

  const fetchAd = async () => {
    try {
      const response = await apiGetSingleAd(id);
      console.log(response.data)
      setAd(response.data)
    } catch (error) {
      console.log("error fetching ad", error)
    }
  };

  useEffect(() => {
    fetchAd()
  },[])

  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        <div className="flex-1 p-20">
          <div className="bg-white p-10 shadow-lg rounded-lg">
            <div>
              <img
                src={ad.image}
                alt={ad.title}
                className="rounded-lg mb-6 w-full h-64 object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">Title: {ad.title}</h2>

            <p className="text-gray-700 mb-6">Description: {ad.description}</p>

            <div className="flex justify-between items-center mb-6">
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
                Category: {ad.category}
              </span>
              <span className="text-lg font-semibold text-gray-800">{ad.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleAd;
