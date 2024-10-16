

const LandingPage = () => {
  return (
    <>

      <div className="landing-page h-[calc(100vh-20px)] m-[10px] flex items-center justify-center rounded-xl">

        <div className="overlay flex justify-center items-center bg-[#4a2e187c] w-full h-full rounded-xl ">

          <div className="landing-content text-white text-center">
            <h1 className="text-2xl">WELCOME TO</h1>
            <h2 className="text-9xl">Trade<span className="text-[#EDD7AE] ml-9">Wave</span></h2>

            <div className="btns mt-16">
              <button className="bg-[#eec16d] rounded py-4 px-10">Get Started</button>
              
            </div>


          </div>

        </div>



      </div>

    </>
  )
}

export default LandingPage;