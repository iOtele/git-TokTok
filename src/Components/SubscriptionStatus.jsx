import React from "react";
import { Check } from "lucide-react";

const SubscriptionStatus = ({ subscription, onManageSubscription }) => {
  if (!subscription) return null;

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <Check className="text-white" size={16} />
          </div>
          <div>
            <p className="font-semibold text-green-800">
              Active Subscription ({subscription.type.toUpperCase()})
            </p>
            <p className="text-sm text-green-600">
              {subscription.type === "email"
                ? subscription.email
                : subscription.phone}
            </p>
          </div>
        </div>
        <button
          onClick={onManageSubscription}
          className="text-green-600 hover:text-green-800 text-sm font-medium"
        >
          Manage
        </button>
      </div>
    </div>
  );
};

export default SubscriptionStatus;
