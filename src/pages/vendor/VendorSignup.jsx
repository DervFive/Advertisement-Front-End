import { Link } from "react-router-dom"

const VendorSignup = () => {
    return (
        <div className="text-white text-xs flex flex-col justify-center items-center h-screen">
            <div className="max-w-sm w-full shadow-lg rounded-lg p-6 bg-gray-950 ">
                <form>
                    {/* buttons for signup goes here */}
                    <h1 className="flex justify-center mb-3">Register With</h1>

                    <div className="flex font-bold gap-3 mb-8">
                        <button className="bg-gray-800 rounded-md w-32 p-2"><span className="mr-1"><i class="fa-brands fa-facebook"></i></span>facebook</button>
                        <button className="bg-gray-800 rounded-md w-32 p-2"><span className="mr-1"><i class="fa-brands fa-google"></i></span>Google</button>
                        <button className=" bg-slate-800 rounded-md w-32"><span className="mr-1"><i class="fa-brands fa-apple"></i></span>AppleID</button>
                    </div>


                    <div>

                        <div className="flex gap-4">
                            <div>
                                <span>First Name</span>
                                <div className=" flex justify-start items-center gap-1 w-full bg-gray-800">
                                    <span className="ml-1"><i class="fa-regular fa-user"></i></span>
                                    <input
                                        className="w-[95%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                                        type="text"
                                        placeholder="Enter name"
                                        required
                                        name="title" />
                                </div>
                            </div>

                            <div>
                                <span className="text-sm ">Last Name</span>
                                <div className=" flex justify-start items-center gap-2 w-full  bg-gray-800 ">
                                    <span className="ml-1"><i class="fa-regular fa-user"></i></span>
                                    <input
                                        className="w-[95%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                                        type="text"
                                        placeholder="Enter name"
                                        required
                                        name="name" />
                                </div>
                            </div>
                        </div>


                        <span>UserName</span>

                        <div className=" flex justify-start items-center gap-2 w-full  bg-gray-800 ">

                            <span ><i class="fa-regular fa-circle-user"></i></span>
                            <input
                                className="w-[90%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                                type="text"
                                placeholder="Enter Name"
                                required
                                name="name" />

                        </div>
                        <span>email</span>
                        <div className=" flex justify-start items-center gap-9 w-full  bg-gray-800 "><span><i class="fa-regular fa-envelope"></i></span>
                            <input
                                className="w-[90%] bg-transparent rounded-md p-2 focus:ring-2 focus:ring-gray-500"
                                type="text"
                                placeholder="Enter email"
                                required
                                name="email" />
                        </div>

                        <span>Password</span>
                        <div className=" flex justify-start items-center gap-2 w-full  bg-gray-800 ">
                            <span><i class="fa-solid fa-lock"></i></span>
                            <input
                                className="w-[90%]  bg-transparent rounded-lg p-2 focus:ring-2 focus:ring-gray-500"
                                type="text"
                                placeholder="Enter password"
                                required
                                name="password" />
                        </div>
                    </div>
                    <button className=" flex justify-center w-full mt-4 bg-yellow-500 p-2 rounded-lg">Sign Up</button>
                    <p>By creating an account you agree to the</p>
                    <p>Terms and Servicies</p>
                    <p>we'll occasionaly send you account related emails</p>

                    <div className="flex justify-center mt-8">
                        <span>Already have an account?</span>
                        <Link to={'/vendor-Login'}><span className="text-yellow-500">Login</span></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default VendorSignup