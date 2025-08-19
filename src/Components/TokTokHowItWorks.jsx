import React from "react";
import { ArrowBigLeft } from "lucide-react";

const TokTokHowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 relative">
      {/* Back button */}
      <ArrowBigLeft
        className="absolute top-20 left-20 text-green-600 cursor-pointer z-20 hover:scale-105 transition-transform"
        size={45}
        onClick={() => window.history.back()}
      />

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-6 md:mb-8">
          How It Works
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-10 md:mb-12 leading-relaxed">
          TokTok makes it easy to stay informed and promote your business — all
          through a simple SMS prompt. Choose a service below and text the
          respective code to <span className="font-bold">4365</span> to get
          started.
        </p>

        {/* Responsive Grid for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media News Recap Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-green-500 flex flex-col">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-2xl">📱</div>
              <h2 className="text-xl md:text-2xl font-bold text-green-700">
                Social Media News Recap
              </h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Get a curated summary of trending social media news and gist
              delivered directly to your phone. Stay in the loop on
              entertainment, sports, politics, and more — without scrolling
              endlessly.
            </p>

            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-gray-800">
                  To subscribe:
                </span>
                <span className="text-gray-700">Send</span>
                <span className="bg-gray-200 px-2 py-1 rounded font-mono text-sm">
                  11Tok
                </span>
                <span className="text-gray-700">to</span>
                <span className="font-bold text-green-700">4365</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Weekly:</span>
                  <span className="text-gray-700">₦300</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Monthly:</span>
                  <span className="text-gray-700">₦1,000</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                After subscribing, you'll receive regular updates via SMS or a
                link to access your personalized news recap.
              </p>
            </div>
          </div>

          {/* Business Advertising Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-gray-500 flex flex-col">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-2xl">📢</div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                Business Advertising
              </h2>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Want to reach thousands of users across all networks? Promote your
              business through TokTok's affordable SMS ad platform. Your advert
              will be featured alongside our daily or weekly gist recaps —
              increasing your brand visibility effortlessly.
            </p>

            <div className="space-y-4 mt-auto">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-gray-800">
                  To advertise:
                </span>
                <span className="text-gray-700">Send</span>
                <span className="bg-gray-200 px-2 py-1 rounded font-mono text-sm">
                  11Advrt
                </span>
                <span className="text-gray-700">to</span>
                <span className="font-bold text-gray-700">4365</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Weekly:</span>
                  <span className="text-gray-700">₦300</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Monthly:</span>
                  <span className="text-gray-700">₦1,000</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                Once you subscribe, you'll be contacted to set up your ad text,
                links, or sponsorship brief.
              </p>
            </div>
          </div>
        </div>

        {/* Notice Box */}
        <div className="mt-12 bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <div className="text-orange-500 text-xl">⚠️</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              TokTok SMS services are available on all Nigerian mobile networks.
              Standard SMS charges may apply. For full access to web-based
              features, use the provided link in your recap message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokTokHowItWorks;
