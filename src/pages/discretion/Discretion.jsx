

const Discretion = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen " >

      <div className="">

        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 border border-black">
          <form className="flex flex-col items-center w-full gap-3">
            <div className="font-extrabold  ">
              <h1>welcome To Tradewave</h1>
              <p>Ready to Engage? Join Us as; </p>
            </div>
            <button className=" text-black py-2 px-4 rounded-lg bg-[#eec16d] hover:bg-[#F57A49] transition duration-300 text-center flex justify-center w-full font-bold ">Vendor</button>
            <button className=" text-black py-2 px-4 rounded-lg bg-[#eec16d] hover:bg-[#F57A49] transition duration-300 text-center flex justify-center w-full font-bold ">Customer</button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Discretion