import React from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Define Your Rules",
    description:
      "Set up custom moderation rules and policies that match your community guidelines and content standards.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Integrate API",
    description:
      "Simple integration with our RESTful API. Add content moderation to your application with just a few lines of code.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Send Requests",
    description:
      "Start sending content for moderation. Get real-time responses and maintain a safe, compliant platform for your users.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with content moderation in three simple steps. Our
            platform makes it easy to implement robust content filtering.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 transform translate-x-6 z-0" />
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-300 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.id}
                  </div>
                </div>

                {/* Icon */}
                {/* <div className="text-yellow-500 mb-6 flex justify-center">
                  {step.icon}
                </div> */}

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to get started? It takes less than 5 minutes to set up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="bg-white border-2 border-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-colors duration-300">
              View Documentation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
