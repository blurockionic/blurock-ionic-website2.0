import React from "react";

const FeatureCard: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <div className="w-full flex gap-2">
      <div className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full shadow">
        {/* Placeholder for Icon */}
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>
      <div>
        <h3 className="text-black text-base font-medium font-montserrat">{title}</h3>
      </div>
    </div>
  );
};

const FeaturetteEmployee: React.FC = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-24">
      <div className="w-full mx-auto my-12 lg:my-24 p-6 lg:p-12 bg-white border rounded-2xl shadow-md flex flex-col-reverse lg:flex lg:flex-row gap-6 lg:gap-12 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Badge */}
          <span className="w-fit px-3 py-1 bg-white text-xs text-gray-800 rounded-md border border-gray-400 font-roboto">
            Product
          </span>

          {/* Header */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-montserrat leading-tight">
            Unlock Your Team&apos;s Potential with Our <br />
            <span className="text-[#5550ff]">Employee Management System</span>
          </h2>

          {/* Description */}
          <p className="text-lg font-roboto text-gray-700">
            Our Order Management System simplifies the entire order process, ensuring accuracy and efficiency. Experience seamless integration with existing platforms for a hassle-free workflow.
          </p>

          {/* Features */}
          <div className="flex flex-col gap-4">
            <FeatureCard
              title="Order Management: Stay organized and collaborate seamlessly."
            />
            <FeatureCard
              title="Simplifying processes for efficiency and growth."
            />
            <FeatureCard
              title="Committed to excellence and sustainability."
            />
          </div>

          {/* Call-to-Action */}
          <div className="mt-4">
            <button className="px-6 py-3 bg-[#5550ff] text-white font-bold font-montserrat rounded-lg transition-transform transform hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-full lg:w-3/4 h-auto rounded-tr-[114px] rounded-bl-[114px] shadow-md"
            src="https://via.placeholder.com/580x640"
            alt="Order Management"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturetteEmployee;
