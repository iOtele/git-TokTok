import React from "react";
import { Lock } from "lucide-react";

const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
  hasSubscription,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => hasSubscription && setActiveCategory(category)}
              disabled={!hasSubscription}
              className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category && hasSubscription
                  ? "bg-green-600 text-white"
                  : hasSubscription
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {category}
              {/* {!hasSubscription && <Lock className="ml-1" size={12} />} */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
