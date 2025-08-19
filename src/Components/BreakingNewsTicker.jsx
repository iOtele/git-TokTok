import React from "react";

const BreakingNewsTicker = ({ breakingNews }) => {
  if (breakingNews.length === 0) return null;

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <span className="bg-red-800 px-3 py-1 text-xs font-bold rounded mr-4 flex-shrink-0">
          BREAKING
        </span>
        <div className="animate-marquee whitespace-nowrap">
          {breakingNews.map((news, index) => (
            <span key={news.id} className="mr-8">
              {news.title}
              {index < breakingNews.length - 1 && " • "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;
