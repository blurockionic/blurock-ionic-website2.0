import React from "react";

const TeamStats: React.FC = () => {
  const stats = [
    {
      id: 1,
      image: "https://via.placeholder.com/48x48",
      text: "9+ Team Members",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/48x48",
      text: "2+ Years of Experience",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/48x48",
      text: "2+ Satisfied Customers",
    },
  ];

  return (
    <div className="w-full mx-auto py-8 sm:py-24 px-6 sm:px-12 bg-gradient-to-b from-[#faf8f4] to-white rounded-2xl flex flex-col justify-center items-center gap-8">
      {/* First Statistic */}
      <div className="flex items-center bg-white rounded-xl shadow-md p-6 w-full sm:w-auto sm:px-10 lg:px-24">
        <img
          src={stats[0].image}
          alt={stats[0].text}
          className="w-12 h-12 rounded-full mr-6 sm:mr-6"
        />
        <div className="sm:flex-1 flex justify-center">
          <p className="text-xl lg:text-2xl font-semibold text-gray-800 font-montserrat">
            {stats[0].text}
          </p>
        </div>
      </div>


      {/* Other Statistics */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
        {stats.slice(1).map((stat) => (
          <div className="flex items-center bg-white rounded-xl shadow-md p-6 w-full sm:w-auto sm:px-10 lg:px-24" key={stat.id}>
            <img
              src={stat.image}
              alt={stat.text}
              className="w-12 h-12 rounded-full mr-6 sm:mr-6"
            />
            <div className="sm:flex-1 flex justify-center">
              <p className="text-xl lg:text-2xl font-semibold text-gray-800 font-montserrat">
                {stat.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamStats;
