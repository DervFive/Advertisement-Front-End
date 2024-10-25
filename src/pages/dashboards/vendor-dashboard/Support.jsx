import avatar from '../../../assets/images/avt.png'

const Support = () => {
  return (
    <section className=" py-12 px-4 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Support Team</h2>
        <p className="text-gray-600 mt-4">
          Our team at Tradewave is here to assist you with any questions, feedback, or technical issues. 
          We strive to provide a seamless experience and are committed to helping you every step of the way.
        </p>
      </div>

      {/* Support Team Members */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Team Member Card Example */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <img
            src={avatar}
            alt="Team Member"
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Alex Johnson</h3>
          <p className="text-gray-600">Customer Support Specialist</p>
          <p className="text-sm text-gray-500 mt-2">
            Expert in account management and platform troubleshooting.
          </p>
        </div>

        {/* Add more team member cards as needed */}
      </div>

      {/* Contact Support */}
      <div className="mt-16 bg-white shadow-lg p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
        <p className="text-gray-600 mt-2">
          Reach out directly to our team through email or phone for prompt assistance.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Email Us</h4>
            <p className="text-gray-500">support@tradewave.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
            <p className="text-gray-500">+1 (234) 567-8901</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
