import React from "react";

const TailoredServices = () => {
  return (
    <div className="w-full px-6 lg:px-24 py-28 bg-white flex flex-col items-center gap-20">
      {/* Heading */}
      <div className="text-center">
        <span className="text-black text-4xl font-bold font-montserrat leading-[48px]">
          Unlock Possibilities with Our <br />
        </span>
        <span className="text-[#0050ff] text-4xl font-bold font-montserrat leading-[48px]">
          Tailored Services
        </span>
      </div>

      {/* Service Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Service Card */}
        {[
          {
            title: "Web Development",
            description:
              "Build responsive, user-focused websites to elevate your brand.",
            imgSrc: "https://via.placeholder.com/405x240",
          },
          {
            title: "Mobile App Development",
            description: "Create seamless apps for iOS and Android users.",
            imgSrc: "https://via.placeholder.com/405x240",
          },
          {
            title: "Digital Marketing",
            description: "Boost your online presence with targeted strategies.",
            imgSrc: "https://via.placeholder.com/405x240",
          },
          {
            title: "SEO Optimization",
            description:
              "Enhance visibility and drive organic traffic to your site.",
            imgSrc: "https://via.placeholder.com/405x240",
          },
          {
            title: "Graphic Design",
            description:
              "Craft stunning visuals to represent your brand identity.",
            imgSrc: "https://via.placeholder.com/405x240",
          },
          {
            title: "Consulting Services",
            description:
              "Expert advice to unlock growth opportunities for your business.",
            imgSrc: "https://via.placeholder.com/405x240",
          },
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <img
              className="w-full h-60 rounded-2xl object-cover"
              src={service.imgSrc}
              alt={service.title}
            />
            <div className="w-full text-center">
              <div className="text-[#0050ff] text-2xl font-bold font-montserrat leading-9">
                {service.title}
              </div>
              <div className="text-black text-lg font-medium font-roboto leading-[33px]">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailoredServices;
