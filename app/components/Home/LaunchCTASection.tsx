const LaunchCTASection = () => {
    return (
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-20 text-center w-full">
        <div className=" mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Launch or Scale Your Vision?
          </h2>
  
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Join the growing community of clients transforming their businesses with <span className="text-blue-600 font-semibold">Blurock Ionic</span>.
          </p>
  
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-200"
            >
              Let’s Build Together
            </a>
            <a
              href="/signup"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition duration-200"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default LaunchCTASection;
  