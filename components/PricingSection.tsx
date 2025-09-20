import React from "react";

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    title: "Free",
    description:
      "Perfect for individuals and small projects to get started with content moderation",
    price: "$0",
    period: "/month",
    features: [
      "Up to 5,000 API requests/month",
      "Basic moderation rules",
      "Text content filtering",
      "Community support",
      "Standard response time",
    ],
    buttonText: "Get Started Free",
  },
  {
    id: "pro",
    title: "Pro",
    description:
      "Ideal for startups and growing applications that need advanced moderation capabilities",
    price: "$9",
    period: "/month",
    features: [
      "Up to 50,000 API requests/month",
      "Advanced rule customization",
      "Text, filtering",
      "Analytics dashboard",
      "Priority support",
      "Custom webhooks",
    ],
    buttonText: "Start Pro Trial",
    isRecommended: true,
  },
  {
    id: "custom",
    title: "Custom",
    description:
      "Enterprise-grade solution for large-scale applications with unlimited capacity",
    price: "Custom",
    features: [
      "Unlimited API requests",
      "Dedicated infrastructure",
      "Custom integrations",
      "White-label solution",
      "Enterprise SLA",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your content moderation needs. Start
            free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.isRecommended
                  ? "border-yellow-400 ring-4 ring-yellow-100"
                  : "border-gray-200 hover:border-yellow-300"
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xl text-gray-500 ml-1">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    plan.isRecommended
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg transform hover:scale-105"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
