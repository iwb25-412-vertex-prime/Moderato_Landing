import React from 'react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-yellow-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of developers using Moderato to keep their content safe
        </p>
        <button className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default FinalCTASection;