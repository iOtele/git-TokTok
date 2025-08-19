import React from "react";
import { X, Globe, Smartphone, Mail, Check, AlertCircle } from "lucide-react";
import { useState } from "react";

const SubscriptionModal = ({ isOpen, onClose, onSubscribe }) => {
  const [subscriptionType, setSubscriptionType] = useState("sms");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Validate inputs
      if (subscriptionType === "email" && !email) {
        throw new Error("Email is required");
      }
      if (subscriptionType === "sms") {
        if (!phone) {
          throw new Error("Phone number is required");
        }

        const phoneRegex = /^0\d{10}$/;
        if (!phoneRegex.test(phone)) {
          throw new Error("Enter a valid phone number");
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onSubscribe({
        type: subscriptionType,
        email: subscriptionType === "email" ? email : "",
        phone: subscriptionType === "sms" ? phone : "",
        timestamp: new Date(),
      });

      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Subscribe to TokTok
                </h2>
                <p className="text-sm text-gray-600">
                  Get access to all news content
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choose Your Subscription
            </h3>
            <div
              className={`border-2 rounded-xl p-4 mb-4 cursor-pointer transition-all ${
                subscriptionType === "sms"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
              onClick={() => setSubscriptionType("sms")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Smartphone className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">SMS Service</h4>
                    <p className="text-sm text-gray-600">
                      Get daily news via SMS
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">₦500/week</p>
                  <p className="text-xs text-gray-500">or ₦1200/month</p>
                </div>
              </div>
            </div>
            <div
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                subscriptionType === "email"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200 hover:border-green-300"
              }`}
              onClick={() => setSubscriptionType("email")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Email Newsletter
                    </h4>
                    <p className="text-sm text-gray-600">
                      Free access to web content
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">FREE</p>
                  <p className="text-xs text-gray-500">Limited access</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="space-y-4">
            {subscriptionType === "email" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g., 08012345678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-2">
                  Text <strong>i1Tok</strong> to <strong>4365</strong> to
                  activate
                </p>
              </div>
            )}

            {error && (
              <div className="flex items-center space-x-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">
              What you'll get:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="text-green-600" size={16} />
                <span>Gist Recap</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="text-green-600" size={16} />
                <span>User Customisation</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="text-green-600" size={16} />
                <span>Set Up Keyword Alert</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
