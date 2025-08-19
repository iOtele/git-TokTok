import React from "react";
import SMSServicePromotion from "../Components/SMSServicePromotion";
import TrendingTopics from "../Components/TrendingTopics";
import QuickStats from "../Components/QuickStats";

const SideBar = ({ hasSubscription, onSubscribeClick }) => {
  return (
    <div className="space-y-6">
      <SMSServicePromotion
        hasSubscription={hasSubscription}
        onSubscribeClick={onSubscribeClick}
      />
      <TrendingTopics
        hasSubscription={hasSubscription}
        onSubscribeClick={onSubscribeClick}
      />
      <QuickStats
        hasSubscription={hasSubscription}
        onSubscribeClick={onSubscribeClick}
      />
    </div>
  );
};

export default SideBar;
