import React from "react";

const FeaturetteDashboard: React.FC = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-24">
    <div className="w-full mx-auto my-12 lg:my-24 p-6 lg:p-12 bg-white border rounded-2xl shadow-md flex-col lg:flex lg:flex-row-reverse gap-6 lg:gap-12">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-gray-100 rounded-full flex items-center justify-center">
          {/* Add any circular designs or content inside */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold sm:mb-12 font-montserrat leading-tight">
            Digital Core Capabilities
          </h2>
          <p className="text-xl font-roboto text-gray-700">
          At Blurock Ionic, we deliver tailored solutions designed to transform your business and help you thrive in the digital age. Explore our wide range of services crafted to meet your unique needs.
          </p>
          <p className="text-lg font-roboto text-gray-700 sm:mt-6">
          We empower businesses to build essential digital capabilities, enabling seamless delivery of innovative outcomes.
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default FeaturetteDashboard;
 