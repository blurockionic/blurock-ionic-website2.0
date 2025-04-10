"use client"
import React, { useState } from 'react';

const ClientFirstSection = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = () => {
    setShowPhone(true);
  };

  return (
    <section className="bg-blue-100 py-16 px-4 text-center w-full ">
      <div className=" mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Client-First Approach
        </h2>

        <p className="text-xl text-gray-600 font-medium italic mb-10">
          “We build relationships, not just solutions. Your success is our mission.”
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 items-center w-full">
          {/* Phone Reveal */}
          <button
            onClick={handlePhoneClick}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-200"
          >
            {showPhone ? '📞 +91-98765-43210' : 'Talk to an Expert'}
          </button>

          {/* Mail Redirection */}
          <a
            href="mailto:contact@blurockionic.com?subject=Project%20Inquiry"
            className="w-full px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition duration-200"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientFirstSection;
