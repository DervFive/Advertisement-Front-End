

const VendorProfile = () => {
    

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4">My Profile</h2>
                <div className="mb-4 text-center">
                    
                        <img
                            src=""
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto mb-2"
                        />
                    
                        <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-2" />
        
                        <input
                            type="file"
                            accept="image/*"
                            className="mt-2"
                        />
    
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Business Name</label>
        
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name" />
                        <p className="text-gray-800">Business name goes here</p>
        
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="name" />
                        <p className="text-gray-800">name goes here</p>
        
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
    
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            name="email"/>
                    
                        <p className="text-gray-800">email goes here</p>
        
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                    
                        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="tel"
                            name="phone"/>
                
                        <p className="text-gray-800">phone goes here</p>
            
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
        
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="address"/>
                        <p className="text-gray-800">location goes here</p>
    
                </div>


                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VendorProfile;