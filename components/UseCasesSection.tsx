import React from 'react';

interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  bgColor: string;
}

const useCases: UseCase[] = [
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Safe communities with real-time content moderation.',
    features: [
      'Post & comment filtering',
      'Community guidelines'
    ],
    bgColor: 'bg-blue-50 border-blue-200',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v6.114a4 4 0 10.996 7.886 1 1 0 00.004-2A2 2 0 109 13.114V7.82l8-1.6v5.894a4 4 0 101 2A1 1 0 0018 14V3z" />
      </svg>
    )
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Protect marketplaces from fraud and fake content.',
    features: [
      'Product validation',
      'Review authenticity'
    ],
    bgColor: 'bg-green-50 border-green-200',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Positive gaming environments with chat moderation.',
    features: [
      'Chat filtering',
      'Toxic behavior detection'
    ],
    bgColor: 'bg-purple-50 border-purple-200',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Safe learning with content and discussion moderation.',
    features: [
      'Assignment review',
      'Student safety'
    ],
    bgColor: 'bg-orange-50 border-orange-200',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    )
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who Is This For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our content moderation solution serves diverse industries and platforms, helping them maintain safe and compliant digital environments.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="group relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title Row */}
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {useCase.features.map((feature, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2 group-hover/item:bg-yellow-200 transition-colors duration-200">
                        <svg
                          className="w-2.5 h-2.5 text-yellow-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">-</div>
              <div className="text-gray-600 font-medium">Active Platforms</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-gray-600 font-medium">Checked Cases</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-600 font-medium">Pass</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Protect Your Platform?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of platforms that trust our content moderation solution to keep their communities safe and compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Get Started Today
            </button>
            <button className="bg-white border-2 border-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-50 transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default UseCasesSection;