import React from "react";
import ContentLockOverlay from "./ContentLockOverlay";

const QuickStats = ({ hasSubscription, onSubscribeClick }) => {
  const stats = [
    { label: "Articles Published", value: hasSubscription ? "24" : "**" },
    { label: "Total Views", value: hasSubscription ? "156K" : "***" },
    { label: "SMS Subscribers", value: hasSubscription ? "12.5K" : "****" },
    { label: "Active Discussions", value: hasSubscription ? "89" : "**" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Stats</h3>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{stat.label}</span>
            <span
              className={`text-lg font-semibold ${
                hasSubscription ? "text-green-600" : "text-gray-400"
              }`}
            >
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      {/* {!hasSubscription && (
        <ContentLockOverlay onSubscribeClick={onSubscribeClick} />
      )} */}
    </div>
  );
};

export default QuickStats;
