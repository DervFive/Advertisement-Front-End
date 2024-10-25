import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page h-auto md:h-[calc(100vh-20px)] m-2 md:m-[10px] flex items-center justify-center rounded-xl">
        <div className="overlay flex justify-center items-center bg-[#4a2e187c] w-full h-auto md:h-full rounded-xl p-4">
          <div className="landing-content text-white text-center">
            <h1 className="text-xl md:text-2xl">WELCOME TO</h1>
            <h2 className="text-5xl md:text-9xl">
              Trade<span className="text-[#EDD7AE] md:ml-9">Wave</span>
            </h2>

            <p className="text-xs md:text-sm mt-2 md:mt-4">Your Home of Quality ADs...</p>

            <Link to={'/customer-dashboard'}>
              <div className="btns mt-8 md:mt-16">
                <button className="bg-[#eec16d] rounded py-3 md:py-4 px-8 md:px-10 hover:text-[#8C6548] hover:bg-[#f1e1c1] duration-300">
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
