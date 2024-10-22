

const Discretion = () => {
  return (
    <div className=" discretion flex flex-col justify-center items-center h-screen " >

      <div className="">
         
        <div className="max-w-sm w-full bg-[#2D0F59] shadow-lg rounded-lg p-6 border border-black py-12 px-16">
          <form className="flex flex-col items-center w-full gap-3">
            <div className="font-bold  text-white text-center mb-7">
              <h1 className="text-xl">Welcome To Tradewave</h1>
              <p className="text-sm">Ready to Engage? Join Us as; </p>
            </div>
            <button className=" py-2 px-4 rounded-lg bg-[#FACB09] hover:text-white hover:bg-[#0EBCF1] transition duration-300 text-center flex justify-center w-full font-bold text-[#FE4E51]">Vendor</button>
            <button className=" py-2 px-4 rounded-lg bg-[#FACB09] hover:text-white hover:bg-[#0EBCF1] transition duration-300 text-center flex justify-center w-full text-[#FE4E51] font-bold ">Customer</button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Discretion