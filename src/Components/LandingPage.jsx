import React from "react";
import { ArrowBigLeft } from "lucide-react";

const TokTokLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <ArrowBigLeft
        className="absolute top-20 left-20 text-green-600 cursor-pointer z-20 hover:scale-105 transition-transform"
        size={45}
        onClick={() => window.history.back()}
      />
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-green-300 rounded-full opacity-50"></div>
      <div className="absolute top-32 right-12 w-20 h-20 border-2 border-green-300 rounded-full opacity-30"></div>
      <div className="absolute top-16 right-32 w-16 h-16 border-2 border-green-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-green-300 rounded-full opacity-30"></div>

      <div className="absolute top-24 right-16 w-16 h-0.5 bg-green-300 opacity-50 rotate-45"></div>
      <div className="absolute top-20 right-24 w-12 h-0.5 bg-green-300 opacity-40 rotate-12"></div>

      <div className="max-w-6xl w-full flex flex-col items-center space-y-12">
        <h1 className="text-5xl md:text-4xl font-bold text-center text-green-600 tracking-wide">
          DON'T MISS OUT ON WHAT'S HAPPENING
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 w-full">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-green-100 border-4 border-green-300 rounded-3xl flex items-center justify-center shadow-lg">
              <div className="relative">
                <div className="w-16 h-16 bg-green-400 rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-100 rounded-full border-2 border-green-500"></div>
                </div>

                <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-12 h-3 bg-green-400 rounded-r-lg"></div>

                <div className="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-8">
                  <div className="w-4 h-2 bg-green-400 mb-1"></div>
                  <div className="w-3 h-2 bg-green-400"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-3xl">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium leading-relaxed">
              <span className="font-bold text-green-600">TokTok</span> is a
              social media gist recap service that provides daily and weekly
              summaries of trending topics, news, and gossip, and advertisement
              publication for small and medium businesses via{" "}
              <span className="font-bold text-green-600">
                USSD code and URL
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 right-32 w-20 h-20 border-2 border-green-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-8 w-12 h-12 border-2 border-green-200 rounded-full opacity-25"></div>
    </div>
  );
};

export default TokTokLanding;
