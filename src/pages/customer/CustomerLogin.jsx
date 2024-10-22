import { Link } from "react-router-dom"


const CustomerLogin = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xs">
      <div className="max-w-sm w-full bg-black shadow-lg rounded-lg p-6 border border-white ">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            
            
              <h1 className="flex justify-center font-extrabold text-white ">Customer Login</h1>
            <p className="flex justify-center font-bold text-white">hey! Enter your details to get sign in to your account</p>
        
            
            <span className="text-sm text-white font-extrabold "></span>
            <input
              className="w-full bg-gray-800
              rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Email/username"
              required
              name="email/username" />
            <div>
              <input
                className="w-full bg-gray-800 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="password"
                required
                name="password" />
            </div>
            
            <span className="font-bold text-white">Forgot Password?</span>
            <button className=" flex justify-center  bg-yellow-500 p-2 rounded-lg">login</button>
            <div>
              <div>
              <span className="flex justify-center text-white mb-4">or sign in with</span>
              {/* buttons for signin goes here */}
              <div className="flex font-bold gap-3">

                <button className=" text-white border rounded-md p-2 w-32"><span className="mr-1 text-white"><i class="fa-brands fa-google"></i></span>Google</button>
                
                <button className=" text-white border rounded-md p-2 w-32"><span className="mr-1 text-white"><i class="fa-brands fa-apple"></i></span>AppleID</button>
                
                <button className="text-white border  p-2 rounded-md w-32"><span className="mr-1 text-white"><i class="fa-brands fa-facebook"></i></span>facebook</button>
                
              </div>
              <div className="flex justify-center mt-8">
                <span className="text-white">Don't have an account?</span>
                <Link to={'/customer-Signup'}> <span className="ml-2 text-yellow-500 font-extrabold">Sign Up</span> </Link>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomerLogin