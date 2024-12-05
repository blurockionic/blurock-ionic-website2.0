import React from "react";

const FeatureCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="w-64 flex flex-col gap-2">
      <div className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full shadow">
        {/* Placeholder for Icon */}
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>
      <div>
        <h3 className="text-black text-base font-medium font-montserrat">{title}</h3>
        <p className="text-[#8c9baa] text-sm font-roboto">{description}</p>
      </div>
    </div>
  );
};

const FeaturetteDashboard: React.FC = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-24">
    <div className="w-full mx-auto my-12 lg:my-24 p-6 lg:p-12 bg-white border rounded-2xl shadow-md flex-col lg:flex lg:flex-row gap-6 lg:gap-12">
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
          <span className="w-fit px-2 py-1 text-xs text-gray-800 rounded-md border border-gray-400 font-roboto">
            Intuitive Dashboard
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-montserrat leading-tight">
            Comprehensive <br/> Software Development <br/> Solutions
          </h2>
          <p className="text-lg font-roboto text-gray-700">
            Empower your business operations and decision-making <br/> with a cutting-edge intuitive
            dashboard that streamlines <br/> processes and delivers actionable insights.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard
            title="Comprehensive Insights"
            description="Visualize data for informed decisions."
          />
          <FeatureCard
            title="Sales Tracking"
            description="Monitor and optimize sales performance."
          />
          <FeatureCard
            title="Flexible Solutions"
            description="Adapt quickly to changing needs."
          />
          <FeatureCard
            title="Quick Setup"
            description="Get started in seconds with ease."
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturetteDashboard;
 