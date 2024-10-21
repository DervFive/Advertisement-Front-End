// import { useEffect, useState } from "react";
// import { apiGetProducts } from "../../../services/products";

import Quotes from "../../../components/Quotes";
import SearchAndCategories from "../../../components/SearchAndCategories";

const VendorOverview = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1 className="mb-[5%] text-4xl font-bold">Welcome Derv5</h1>
      <Quotes />
      <SearchAndCategories />

      <div className="dash grid grid-cols-4 gap-5">
        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg ">
            <i class="fa-brands fa-product-hunt"></i>
          </div>
          <p className="font-bold text-sm">My Products</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-cart-flatbed-suitcase"></i>
          </div>
          <p className="font-bold text-sm">Orders</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-folder-plus"></i>
          </div>
          <p className="font-bold text-sm">Add Product</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-gift"></i>
          </div>
          <p className="font-bold text-sm">Coupons</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-thumbs-up"></i>
          </div>

          <p className="font-bold text-sm">Reviews</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-circle-info"></i>
          </div>
          <p className="font-bold text-sm">About</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="font-bold text-sm">Support</p>
        </div>

        <div className="icon-main flex justify-center items-center flex-col gap-2 hover:scale-110 transition-transform duration-[1s]">
          <div className="icon-container text-5xl p-20 bg-slate-50 rounded shadow-lg">
            <i class="fa-solid fa-gear"></i>
          </div>
          <p className="font-bold text-sm">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default VendorOverview;

{
  /* <div className="code">
//   const [products, setProducts] = useState([]);

//   const fetchData = async () => {
//     const response = await apiGetProducts();
//     console.log(response.data);
//     setProducts(response.data.data);
//   };

//   console.log("pro", products);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (products.length < 1) {
//     return <div>loading</div>;
//   }

//   return (
//     <> 
//       {products.map((product) => {
//         return (
          
//           <div className=" content flex justify-center flex-col gap-2 ">
//           <div className="image-container">
//             <img
//               src={product.product_image}
//               alt={product.name}
//               className="max-w-full max-h-full rounded-lg"
//             />
//           </div>

//           <h3> {product.name} </h3>
//         </div>
//         );
//       })}
//     </>
//   );
// 
</div> */
}
