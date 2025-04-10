import Link from "next/link";
import React from "react";

const OurProductSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdfdfd] to-[#f5f5f5] py-16 px-4  w-full">
      <div className="w-full mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Our Products
        </h2>

        {/* Subtitle */}
        <h3 className="text-2xl font-semibold text-pink-600 mb-3">
          MarriageVendor.com
        </h3>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          A dedicated product designed to simplify wedding planning for couples
          and vendors.
          <br className="hidden md:block" />
          Discover venues, decorators, photographers, and more — all in one
          place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://www.marriagevendors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl shadow hover:bg-pink-700 transition duration-200"
          >
            Explore Product
          </a>
          <a
            href="https://www.marriagevendors.com/vendorlogin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-pink-600 text-pink-600 font-semibold rounded-xl hover:bg-pink-50 transition duration-200"
          >
            Sign Up as Vendor
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurProductSection;
