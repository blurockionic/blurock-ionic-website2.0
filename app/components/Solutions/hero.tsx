import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#0050ff] flex justify-center items-center">
      <div className="max-w-screen-lg px-8 py-12 flex flex-col items-center gap-6">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-white text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat leading-tight">
            Comprehensive Solutions for Business Growth
          </h1>
          <p className="text-white text-center text-base sm:text-lg lg:text-xl font-roboto leading-relaxed max-w-md">
            Unlock growth with tailored, scalable solutions for seamless integration and efficiency.
          </p>
        </div>

        {/* Call to Action Button */}
        <button
          className="px-6 py-3 bg-white text-[#0050ff] text-sm sm:text-base lg:text-lg font-bold font-montserrat rounded-xl border border-white shadow-lg transition-transform transform hover:scale-105"
        >
          Explore Our Journey
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
