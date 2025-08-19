import React from "react";
import { Globe } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
        <Globe className="text-white" size={24} />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-green-700">TokTok</h1>
        <p className="text-xs text-gray-500">Your Daily Gist Recap</p>
      </div>
    </div>
  );
};

export default Logo;
