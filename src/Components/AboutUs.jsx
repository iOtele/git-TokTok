
import React from "react";
import { Users, Target, Heart, Award, ArrowBigLeft } from "lucide-react";
import TokTokLanding from "./LandingPage";

const aboutSections = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide Nigerian businesses with cutting-edge social media analytics and marketing tools that drive meaningful engagement and sustainable growth in the digital landscape.",
  },
  {
    icon: Award,
    title: "Our Vision",
    text: "To become the leading platform for social media intelligence in West Africa, enabling businesses of all sizes to make informed decisions and maximize their digital marketing ROI.",
  },
  {
    icon: Users,
    title: "Our Team",
    text: "A diverse group of data scientists, marketing experts, and technology professionals united by our commitment to innovation and excellence in digital marketing solutions.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "We believe in transparency, affordability, and accessibility. Every feature we build is designed with our users' success in mind, ensuring maximum value for businesses across all network providers.",
  },
];

const AboutUs = () => {
  return (
    <>
      <TokTokLanding />

      <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
 
      <ArrowBigLeft
              className="absolute top-30 left-20 text-green-600 cursor-pointer z-20 hover:scale-105 transition-transform"
              size={45}
              onClick={() => window.history.back()}
            />

        <div className="max-w-6xl mx-auto relative">
       
          <div className="text-center mb-12 mt-20">
            <h1 className="text-4xl font-bold text-green-600 mb-6 tracking-wide">
              ABOUT US
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              We are passionate about delivering comprehensive social media
              insights and empowering businesses across Nigeria with data-driven
              solutions for growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutSections.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center border-2 border-green-500 space-y-6 min-h-72 p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <Icon
                    className="w-16 h-16 text-green-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-300 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
