import { Link } from "react-router-dom";
import { apiSignup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VendorSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // prevent the page from reloading
    event.preventDefault();

    try {
      // prepare data to be sent to backend
      setLoading(true);
      const firstName = FormData.get("firstName");
      const LastName = FormData.get("lastName");
      const userName = FormData.get("userName");
      const email = FormData.get("email");
      const password = FormData.get("password");

      console.log("firstName", firstName);

      // check if password macth
      // if(password1 !== password2){
      // return
      // }

      const payload = { firstName, LastName, userName, email, password };

      const formData = new FormData(event.target); //   take data from the form

      const response = await apiSignup(payload);
      console.log(response.data);

      navigate("/login"); // takes the user to the login page
    } catch (error) {
      // show a toast notification to indicate error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-black text-xs flex flex-col justify-center items-center h-screen">
      <div className="max-w-sm w-full shadow-lg rounded-lg p-6 bg-white ">
        <form onSubmit={handleSubmit}>
          {/* buttons for signup goes here */}
          <h1 className="flex justify-center mb-3">Register With</h1>

          <div className="flex font-bold gap-3 mb-8">
            <button className="bg-white  border rounded-md w-32 p-2">
              <span className="mr-1">
                <i class="fa-brands fa-facebook"></i>
              </span>
              facebook
            </button>
            <button className="bg-white  border rounded-md w-32 p-2">
              <span className="mr-1">
                <i class="fa-brands fa-google"></i>
              </span>
              Google
            </button>
            <button className=" bg-white  border rounded-md w-32">
              <span className="mr-1">
                <i class="fa-brands fa-apple"></i>
              </span>
              AppleID
            </button>
          </div>

          <div className="">
            <div className="flex gap-4">
              <div>
                <span>First Name</span>
                <div className=" flex justify-start items-center gap-1 w-full bg-white border">
                  <span className="font-bold ml-2">
                    <i class="fa-regular fa-user"></i>
                  </span>
                  <input
                    className="w-[95%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-black"
                    type="text"
                    placeholder="Enter name"
                    required
                    name="firstName"
                  />
                </div>
              </div>

              <div>
                <span className=" ">Last Name</span>
                <div className=" flex justify-start items-center gap-2 w-full  bg-white borther border">
                  <span className="ml-2 font-bold">
                    <i class="fa-regular fa-user"></i>
                  </span>
                  <input
                    className="w-[95%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                    type="text"
                    placeholder="Enter name"
                    required
                    name="LastName"
                  />
                </div>
              </div>
            </div>

            <span>UserName</span>

            <div className=" flex justify-start items-center gap-2 w-full  bg-white border">
              <span className="font-bold  ml-2">
                <i class="fa-regular fa-circle-user"></i>
              </span>
              <input
                className="w-[90%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Enter Name"
                required
                name="userName"
              />
            </div>
            <span>email</span>
            <div className=" flex justify-start items-center gap-1 w-full border bg-white ">
              <span className="font-bold  ml-2">
                <i class="fa-regular fa-envelope"></i>
              </span>
              <input
                className="w-[90%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Enter email"
                required
                name="email"
              />
            </div>

            <span>Password</span>
            <div className=" flex justify-start items-center gap-2 w-full  bg-white border ">
              <span className="font-bold  ml-2">
                <i class="fa-solid fa-lock"></i>
              </span>
              <input
                className="w-[90%]  bg-transparent rounded-lg p-2 focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Enter password"
                required
                name="password"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" flex justify-center w-full mt-4 bg-[#F57A49] p-2 rounded-lg"
          >
            Sign Up
          </button>

          <div className="text-[8px]">
            <p>
              By creating an account you agree to the{" "}
              <span className="font-extrabold underline">
                Terms and Servicies
              </span>{" "}
              we'll occasionaly send you account related emails
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <span>Already have an account?</span>
            <Link to={"/vendor-Login"}>
              <span className="text-[#F57A49]">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorSignup;
