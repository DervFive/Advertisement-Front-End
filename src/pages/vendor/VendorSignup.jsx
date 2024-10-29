import { Link } from "react-router-dom";
import { apiSignup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const VendorSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // prevent the page from reloading
    event.preventDefault();

    try {
      const formData = new FormData(event.target); //   take data from the form
      // prepare data to be sent to backend
      setLoading(true);
      const name = formData.get("name");
      const phone = formData.get("phone");
      const businessName = formData.get("businessName");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const location = formData.get("location");

      console.log("firstName", name);

      // check if password macth
      // if(password1 !== password2){
      // return
      // }

      const payload = {
        name,
        phone,
        businessName,
        email,
        password,
        confirmPassword,
        location,
        role: "vendor",
      };

      const response = await apiSignup(payload);
      console.log(response.data);
      toast.success("Account Registered Succesfully. Proceed to Log In");
      navigate("/vendor-Login"); // takes the user to the login page
    } catch (error) {
      // show a toast notification to indicate error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="log-in h-full ">
      <div className="bg-[#ff923e44] w-full h-full flex justify-center items-center ">
        <div className="text-black text-xs flex flex-col justify-center items-center h-full ">
          <div className="max-w-sm w-full shadow-lg rounded-lg p-6 bg-white  my-11">
            <form onSubmit={handleSubmit}>
              <h1 className="flex justify-center mb-3 text-lg">
                Register With
              </h1>
              <div className="flex font-bold gap-3 mb-8 justify-center">
                <button className="bg-white border rounded-md w-32 p-2 flex items-center justify-center">
                  <span className="mr-1">
                    <i className="fa-brands fa-facebook"></i>
                  </span>
                  Facebook
                </button>
                <button className="bg-white border rounded-md w-32 p-2 flex items-center justify-center">
                  <span className="mr-1">
                    <i className="fa-brands fa-google"></i>
                  </span>
                  Google
                </button>
                <button className="bg-white border rounded-md w-32 p-2 flex items-center justify-center">
                  <span className="mr-1">
                    <i className="fa-brands fa-apple"></i>
                  </span>
                  AppleID
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <label className="block mb-1">Full Name</label>
                    <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                      <i className="fa-regular fa-user mr-2"></i>
                      <input
                        className="w-full bg-transparent focus:ring-2 focus:ring-black"
                        type="text"
                        placeholder="Enter your name"
                        required
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="block mb-1">Phone</label>
                    <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                      <i className="fa-solid fa-phone mr-2"></i>
                      <input
                        className="w-full bg-transparent focus:ring-2 focus:ring-black"
                        type="tel"
                        placeholder="Enter phone number"
                        required
                        name="phone"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Business Name</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-regular fa-building mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 focus:ring-black"
                      type="text"
                      placeholder="Enter business name"
                      required
                      name="businessName"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Location</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-solid fa-location-dot mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 focus:ring-black"
                      type="text"
                      placeholder="Enter location"
                      required
                      name="location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Email</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-regular fa-envelope mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 focus:ring-black"
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Password</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-solid fa-lock mr-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-1 focus:ring-black"
                      type="password"
                      placeholder="Enter password"
                      required
                      name="password"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Confirm Password</label>
                  <div className="flex items-center gap-1 bg-white border p-2 rounded-md">
                    <i className="fa-solid fa-lock ml-2"></i>
                    <input
                      className="w-full bg-transparent focus:ring-2 focus:ring-black"
                      type="password"
                      placeholder="Confirm password"
                      required
                      name="confirmPassword"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-[#F57A49] p-2 rounded-lg text-white hover:bg-[#d3513a] hover:text-white duration-300"
              >
                Sign Up
              </button>

              <div className="text-xs mt-2 text-center">
                <input type="checkbox" required id="privacy" />
                <label htmlFor="privacy">
                  By creating an account you agree to the{" "}
                  <Link to={"/privacy"}>
                    <span className="font-bold underline">
                      Terms and Services
                    </span>
                    .
                  </Link>
                  We will occasionally send you account-related emails.
                </label>
              </div>

              <div className="flex justify-center mt-4 text-sm">
                <span>Already have an account?</span>
                <Link to="/vendor-Login">
                  <span className="text-[#F57A49] ml-2 hover:underline  ">
                    Login
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
