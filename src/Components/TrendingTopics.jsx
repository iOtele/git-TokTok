import React from "react";
import { TrendingUp, ChevronRight, Lock } from "lucide-react";
import ContentLockOverlay from "./ContentLockOverlay";

const TrendingTopics = ({ hasSubscription, onSubscribeClick }) => {
  const trendingTags = [
    "#NigeriaElections2027",
    "#LagosTech",
    "#NollywoodGlobal",
    "#SuperEagles",
    "#EconomicGrowth",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="text-green-600" size={20} />
        <h3 className="text-lg font-bold text-gray-900">Trending Now</h3>
      </div>
      <div className="space-y-3">
        {trendingTags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
          >
            <span
              className={`text-sm cursor-pointer ${
                hasSubscription
                  ? "text-gray-700 hover:text-green-600"
                  : "text-gray-400"
              }`}
            >
              {tag}
              {/* {!hasSubscription && <Lock className="inline ml-1" size={12} />} */}
            </span>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        ))}
      </div>
      {/* {!hasSubscription && (
        <ContentLockOverlay onSubscribeClick={onSubscribeClick} />
      )} */}
    </div>
  );
};

export default TrendingTopics;
