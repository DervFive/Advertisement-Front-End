import { useState } from "react";

import SearchAndCategories from "../../components/SearchAndCategories";
import SignButton from "../../components/SignButton";
import Grid from "../../components/Grid";

const CustomerOverview = () => {

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-4xl">TradeWave</h1>
        <div className="flex justify-center items-center gap-3">
          <p className="text-[14px]">Vendor or Customer?</p>
          <SignButton />
        </div>
      </div>

      <div className="hero w-full h-[100vh] rounded overflow-hidden">
        <div className="bg-[#00000077] w-full h-full flex justify-center items-center flex-col gap-3">
          <h1 className="text-3xl font-bold text-white">
            Find Quality Beauty Products, Faster!
          </h1>
          <div className="text-white text-sm">
            <p>
              Explore a world of unbeatable products from trusted vendors.
              Curated collections at your fingertips.
            </p>
          </div>
          <SearchAndCategories />
        </div>
      </div>

      <div className=" w-full px-3 text-[12px] mt-[-50px]">
        <div className="flex justify-around items-center">
          <span className="px-2 py-1 rounded bg-white hover:bg-[#1c3f3a] hover:text-white duration-300 ">
            <i class="fa-solid fa-filter"></i>
          </span>

          <span className="px-2 py-1 rounded bg-white hover:bg-[#1c3f3a] hover:text-white duration-300 ">
            <i class="fa-solid fa-grip"></i>
          </span>

          <span className="px-2 py-1 rounded bg-white hover:bg-[#1c3f3a] hover:text-white duration-300 ">
            <i class="fa-solid fa-list"></i>
          </span>
        </div>
      </div>

      <Grid />
    </>
  );
};

export default CustomerOverview;
