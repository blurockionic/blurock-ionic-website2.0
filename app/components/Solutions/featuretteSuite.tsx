import React from "react";

const FeatureSuite: React.FC = () => {
  const features = [
    {
      id: "01",
      title: "Scalability optimization",
      description:
        "Our scalability solutions analyze your current infrastructure, identifying bottlenecks and optimizing processes.",
    },
    {
      id: "02",
      title: "Process automation",
      description:
        "Streamline your workflows and reduce manual tasks. Enhance efficiency, and focus on strategic initiatives.",
    },
    {
      id: "03",
      title: "Solid planning",
      description:
        "Get free access to our global partner network and marketplace to receive premium assistance.",
    },
    {
      id: "04",
      title: "Training & Development",
      description:
        "Enhance employee skills, foster a culture of learning, and boost overall organizational performance.",
    },
    {
      id: "05",
      title: "Supply chain optimization",
      description:
        "Leverage data analytics and predictive algorithms to optimize inventory and supplier relationships.",
    },
    {
      id: "06",
      title: "Data Integration",
      description:
        "Our data integration solutions unify data sets, enabling real-time insights and strategic decision-making.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      {/* Heading Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 font-montserrat leading-tight">
          Comprehensive All-in-One Feature Suite
        </h1>
        <p className="text-xl text-gray-700 font-montserrat max-w-3xl mx-auto">
          Explore a spectrum of solutions meticulously designed to empower your business growth.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 border-2 border-blue-500 rounded-xl space-y-4 hover:shadow-lg transition-shadow relative ring-4 ring-blue-100"
          >
            {/* Images Section */}
            {/* Company Logo - Top-Right */}
              <img
                src="https://via.placeholder.com/50"
                alt="Company Logo"
                className="absolute top-2 right-2 w-10 h-10 object-contain"
              />
              <div className="relative">
              {/* Main Icon - Left-Aligned */}
              <img
                src="https://via.placeholder.com/100"
                alt="Main Icon"
                className="w-16 h-16 object-contain mb-4"
              />
              
            </div>

            {/* Feature Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 font-inter flex items-baseline gap-1">
                <span>{feature.id}</span>
                <span className="text-gray-600 font-medium">—</span>
                <span>{feature.title}</span>
              </h3>
              <p className="text-sm text-gray-600 font-inter">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSuite;
