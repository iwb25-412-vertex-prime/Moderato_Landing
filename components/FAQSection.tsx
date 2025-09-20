"use client";

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'what-is-moderato',
    question: 'What is Moderato CMaaS?',
    answer: 'Moderato is a Content Moderation as a Service platform that allows developers to easily integrate customizable content moderation into their applications. Our API enables you to define moderation rules in natural language and automatically filter text, images, and user-generated content.'
  },
  {
    id: 'how-does-it-work',
    question: 'How does the content moderation work?',
    answer: 'Our platform uses advanced AI and machine learning algorithms to analyze content based on your custom rules. You can define moderation policies in plain English (e.g., "block profanity and hate speech"), and our system will automatically filter content according to those rules. You receive real-time responses via our REST API.'
  },
  {
    id: 'pricing-limits',
    question: 'What are the API request limits for each plan?',
    answer: 'Free plan includes 5,000 requests per month, Pro plan offers 50,000 requests per month, and Custom/Enterprise plans provide unlimited requests. All plans reset monthly, and you can upgrade at any time if you need more capacity.'
  },
  {
    id: 'supported-content',
    question: 'What types of content can be moderated?',
    answer: 'Moderato supports text content (comments, posts, messages), images, and other user-generated media. Our Pro and Custom plans include advanced filtering for multimedia content, while the Free plan focuses on text moderation.'
  },
  {
    id: 'integration-time',
    question: 'How long does it take to integrate?',
    answer: 'Most developers can integrate Moderato in under 30 minutes. We provide comprehensive API documentation, SDKs for popular languages, and example code. Our RESTful API is designed to be simple and developer-friendly.'
  },
  {
    id: 'custom-rules',
    question: 'Can I create custom moderation rules?',
    answer: 'Yes! Pro and Custom plans allow you to define sophisticated moderation rules in natural language. You can create rules for specific use cases, adjust sensitivity levels, and even whitelist or blacklist specific terms or patterns.'
  },
  {
    id: 'data-privacy',
    question: 'How do you handle data privacy and security?',
    answer: 'We take data privacy seriously. All content is processed securely and we don\'t store your user data longer than necessary for processing. We\'re GDPR compliant and offer enterprise-grade security with our Custom plans, including data processing agreements and dedicated infrastructure.'
  },
  {
    id: 'support',
    question: 'What kind of support do you provide?',
    answer: 'Free plan users get community support through our documentation and forums. Pro plan includes priority email support with 24-48 hour response times. Custom/Enterprise plans include dedicated account management, phone support, and SLA guarantees.'
  }
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Moderato CMaaS and content moderation
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className="bg-gradient-to-r from-white to-yellow-50 border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-300 hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-white rounded-xl border-2 border-yellow-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get started with content moderation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="bg-white border-2 border-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-50 transition-colors duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;