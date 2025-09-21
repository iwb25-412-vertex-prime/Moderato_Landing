"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="py-8 sm:py-12 lg:py-20 overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8 flex flex-col items-start gap-6 sm:gap-8 lg:gap-16 lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
          {/* Section Title */}
          <div className="flex flex-col gap-3 sm:gap-4 text-left">
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-5xl font-bold text-black text-left">
              Never let harmful content slip through again
            </h1>
            {/* Description */}
            <p className="text-gray-600 text-base lg:text-lg text-left py-2 sm:py-3 lg:py-5">
              From custom policies to real-time enforcement, Moderato keeps your platform compliant and secure.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5" style={{ color: "#ff9900" }} />
              </div>
              <span className="text-black text-base leading-6 font-medium">Custom policy definition in plain language</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5" style={{ color: "#ff9900" }} />
              </div>
              <span className="text-black text-base leading-6 font-medium">AI-powered content moderation via API</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5" style={{ color: "#ff9900" }} />
              </div>
              <span className="text-black text-base leading-6 font-medium">Scalable moderation for any volume of user content</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5" style={{ color: "#ff9900" }} />
              </div>
              <span className="text-black text-base leading-6 font-medium">First users get 15,000 free requests for life</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="h-5 w-5" style={{ color: "#ff9900" }} />
              </div>
              <span className="text-black text-base leading-6 font-medium">Trust, safety, and compliance built in</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row justify-start mt-6 sm:mt-8 lg:mt-10">
            <Button className="bg-[#ff9900] hover:bg-[#e68a00] text-white">Try for free</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-black hover:bg-gray-100">
              How it works
              <ArrowRight />
            </Button>
          </div>

          
        </div>

        {/* Right Column */}
        <div className="w-full flex-1 max-w-full lg:max-w-none">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full max-w-full overflow-hidden">
            {/* Background Image - Second Image */}
            <div className="absolute top-0 left-4 sm:left-8 lg:left-16 w-[80%] sm:w-[400px] lg:w-[500px] h-[80%] sm:h-[400px] lg:h-[500px] z-10 bg-transparent overflow-hidden">
              {!imageError ? (
                <Image 
                  src="/hero.png" 
                  alt="Moderato CMaaS - safer content everywhere." 
                  fill 
                  className="h-full w-full object-contain shadow-md opacity-70"
                  onError={() => setImageError(true)}
                  style={{ background: 'transparent' }}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center shadow-md opacity-70">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">CM</span>
                    </div>
                    <p className="text-gray-600 font-medium">Content Moderation</p>
                  </div>
                </div>
              )}
            </div>

            

            {/* Foreground Image - Main Image */}
            <div className="absolute top-3 sm:top-6 lg:top-12 left-0 w-[70%] sm:w-[300px] lg:w-[400px] h-[70%] sm:h-[300px] lg:h-[400px] z-20 bg-transparent overflow-hidden">
              {!imageError ? (
                <Image 
                  src="/hero.png" 
                  alt="Moderato CMaaS - safer content everywhere." 
                  fill 
                  priority 
                  className="h-full w-full object-contain shadow-lg"
                  onError={() => setImageError(true)}
                  style={{ background: 'transparent' }}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-[#ff9900] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">MC</span>
                    </div>
                    <p className="text-gray-600 font-medium">Moderato</p>
                  </div>
                </div>
              )}
            </div>  
          </div>
        </div>


      </div>
      
      {/* Open Source Message - Appears below everything on all screen sizes */}
      <div className="container mx-auto px-2 sm:px-4 mt-4 sm:mt-6 lg:mt-8">
        <div className="flex items-center justify-center gap-2 flex-wrap text-center">
          <span className="text-gray-500 text-sm sm:text-base md:text-4xl">We are</span>
          <span className="text-[#ff9900] font-semibold text-sm sm:text-base md:text-4xl">open source!</span>
          <span className="text-gray-500 text-sm sm:text-base md:text-4xl">Contribute on</span>
          <button
            type="button"
            onClick={() => {
              console.log('GitHub button clicked - opening link...');
              try {
                const newWindow = window.open('https://github.com/iwb25-412-vertex-prime', '_blank', 'noopener,noreferrer');
                if (!newWindow) {
                  console.log('Popup blocked, trying direct navigation...');
                  window.location.href = 'https://github.com/iwb25-412-vertex-prime';
                }
              } catch (error) {
                console.error('Error opening GitHub link:', error);
              }
            }}
            className="text-black hover:text-[#ff9900] font-medium text-sm sm:text-base md:text-4xl transition-colors bg-transparent border-none cursor-pointer px-0 py-1 underline hover:no-underline outline-none focus:outline-none"
          >
            GitHub
          </button>
        </div>
      </div>
    </section>
  )
}
