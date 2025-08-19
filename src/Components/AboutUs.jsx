import React from "react";
import { Users, Target, Heart, Award, LucideArrowBigLeft } from "lucide-react";
import TokTokLanding from "./LandingPage";

const AboutUs = () => {
  return (
    <>
      {" "}
      <TokTokLanding />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
        <LucideArrowBigLeft
          className="absolute top-20 left-20 text-green-600 cursor-pointer z-20 fill-green-600 hover:fill-green-500 transition-colors"
          size={45}
          onClick={() => window.history.back()}
        />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-20">
            <h1 className="text-4xl font-bold text-green-600 mb-8 tracking-wide">
              ABOUT US
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              We are passionate about delivering comprehensive social media
              insights and empowering businesses across Nigeria with data-driven
              solutions for growth and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <div className="flex flex-col items-center text-center border-2 border-green-500 space-y-6 min-h-72 p-4 rounded-lg">
              <div className="w-24 h-24 flex items-center justify-center">
                <Target className="w-16 h-16 text-gray-800" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide Nigerian businesses with cutting-edge social media
                analytics and marketing tools that drive meaningful engagement
                and sustainable growth in the digital landscape
              </p>
            </div>

            <div className="flex flex-col items-center text-center border-2 border-green-500 space-y-6 min-h-72 p-4 rounded-lg">
              <div className="w-24 h-24 flex items-center justify-center">
                <Award className="w-16 h-16 text-gray-800" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading platform for social media intelligence in
                West Africa, enabling businesses of all sizes to make informed
                decisions and maximize their digital marketing ROI
              </p>
            </div>

            <div className="flex flex-col items-center text-center border-2 border-green-500 space-y-6 min-h-72 p-4 rounded-lg">
              <div className="w-24 h-24 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-800" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A diverse group of data scientists, marketing experts, and
                technology professionals united by our commitment to innovation
                and excellence in digital marketing solutions
              </p>
            </div>

            <div className="flex flex-col items-center text-center border-2 border-green-500 space-y-6 min-h-72 rounded-lg">
              <div className="w-24 h-24 flex items-center justify-center">
                <Heart className="w-16 h-16 text-gray-800" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in transparency, affordability, and accessibility.
                Every feature we build is designed with our users' success in
                mind, ensuring maximum value for businesses across all network
                providers
              </p>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-16 h-16 text-green-300 opacity-60">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute top-40 right-20 w-12 h-12 text-green-300 opacity-60">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute bottom-20 left-20 w-20 h-20 text-green-300 opacity-60">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute bottom-40 right-10 w-14 h-14 text-green-300 opacity-60">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-300 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
