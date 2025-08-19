import React from "react";
import { Smartphone } from "lucide-react";

const SMSServicesPromotion = ({ hasSubscription, onSubscribeClick }) => {
  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Smartphone className="text-green-200" size={24} />
        <h3 className="text-xl font-bold">TokTok SMS Service</h3>
      </div>
      <p className="text-green-100 mb-4 text-sm">
        {hasSubscription
          ? "Upgrade to premium SMS service for daily news recap and business promotion!"
          : "Get daily news recap & promote your business via SMS. Available on all networks!"}
      </p>
      <div className="space-y-3">
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-sm font-medium mb-1">📩 Social Media News Recap:</p>
          <p className="text-xs text-green-100">
            Text <strong>i1Tok</strong> to <strong>4365</strong>
          </p>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-sm font-medium mb-1">📢 Business Advertising:</p>
          <p className="text-xs text-green-100">
            Text <strong>i1Advrt</strong> to <strong>4365</strong>
          </p>
        </div>
      </div>
      <button
        onClick={onSubscribeClick}
        className="w-full bg-white text-green-700 font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-green-50 transition-colors"
      >
        {hasSubscription ? "Upgrade SMS" : "Learn More"}
      </button>
    </div>
  );
};

export default SMSServicesPromotion;
