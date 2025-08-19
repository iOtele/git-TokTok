import React from "react";
import { Lock } from "lucide-react";

const ContentLockOverlay = ({ onSubscribeClick }) => {
  return (
    <div className="absolute inset-0 bottom-6 bg-white/85 flex items-center justify-center z-10 pointer-events-auto">
      <div className="text-center p-8 max-w-md">
        <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="text-white" size={25} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Premium Content
        </h3>
        <p className="text-gray-600 mb-2">
          Subscribe to TokTok to access all our curated news content and daily
          summaries.
        </p>
        <button
          onClick={onSubscribeClick}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Subscribe to Unlock
        </button>
      </div>
    </div>
  );
};

export default ContentLockOverlay;
