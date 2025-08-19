import React from "react";
import { MessageSquare, Share2, Bookmark, Eye } from "lucide-react";

const ArticleActions = ({
  article,
  onBookmark,
  isBookmarked,
  hasSubscription,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => hasSubscription && onBookmark(article.id)}
          disabled={!hasSubscription}
          className={`p-2 rounded-full transition-colors ${
            isBookmarked && hasSubscription
              ? "text-green-600 bg-green-50"
              : hasSubscription
              ? "text-gray-400 hover:text-green-600 hover:bg-green-50"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          <Bookmark
            size={18}
            fill={isBookmarked && hasSubscription ? "currentColor" : "none"}
          />
        </button>
        <button
          disabled={!hasSubscription}
          className={`p-2 rounded-full transition-colors ${
            hasSubscription
              ? "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
              : "text-gray-300 cursor-not-allowed"
          }`}
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default ArticleActions;
