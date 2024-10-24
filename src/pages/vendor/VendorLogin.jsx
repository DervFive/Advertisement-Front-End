import { Link } from "react-router-dom";

const VendorLogin = () => {
  return (
    <div className=" log-in flex flex-col justify-center items-center h-screen text-xs">
      <div className="overlay w-screen h-screen bg-[#f57a4923] flex flex-col justify-center items-center">
        <div className="max-w-sm w-full bg-white shadow-2xl rounded-lg p-6 ">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <h1 className="flex justify-center font-extrabold ">
                Vendor Login
              </h1>
              <p className="flex justify-center font-bold ">
                hey! Enter your details to get sign in to your account
              </p>

              <span className="text-sm text-white font-extrabold"></span>
              <input
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Email/username"
                required
                name="email/username"
              />
              <div>
                <input
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="password"
                  required
                  name="password"
                />
              </div>

              <span className="font-bold">
                {" "}
                <input type="checkbox" />
                Remeber ME
              </span>
              <button className=" flex justify-center bg-[#F57A49] p-2 rounded-lg">
                login
              </button>
              <div>
                <div>
                  <span className="flex justify-center mb-4">
                    or sign in with
                  </span>
                  {/* buttons for signin goes here */}
                  <div className="flex font-bold gap-3">
                    <button className=" border rounded-md p-2 w-32">
                      <span className="mr-1 ">
                        <i class="fa-brands fa-google"></i>
                      </span>
                      Google
                    </button>

                    <button className=" border rounded-md p-2 w-32">
                      <span className="mr-1">
                        <i class="fa-brands fa-apple"></i>
                      </span>
                      AppleID
                    </button>

                    <button className="border  p-2 rounded-md w-32">
                      <span className="mr-1">
                        <i class="fa-brands fa-facebook"></i>
                      </span>
                      facebook
                    </button>
                  </div>
                  <div className="flex justify-center mt-8">
                    <span>Don't have an account?</span>
                    <Link to={"/vendor-Signup"}>
                      {" "}
                      <span className="ml-2 text-[#F57A49] font-extrabold">
                        Sign Up
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
