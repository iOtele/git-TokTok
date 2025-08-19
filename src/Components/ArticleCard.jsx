import React from "react";
import { User, MessageSquare, Share2, Bookmark, Eye } from "lucide-react";
import ContentLockOverlay from "./ContentLockOverlay";

const ArticleCard = ({
  article,
  onBookmark,
  isBookmarked,
  hasSubscription,
  onSubscribeClick,
}) => {
  return (
    <article className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {article.isBreaking && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
            BREAKING
          </div>
        )}
        <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 text-xs font-medium rounded">
          {article.category}
        </div>
        {/* {!hasSubscription && (
          <ContentLockOverlay onSubscribeClick={onSubscribeClick} />
        )} */}
      </div>

      <div className="p-5 relative">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {hasSubscription
            ? article.excerpt
            : `${article.excerpt.substring(0, 80)}...`}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-2">
            <User size={14} />
            <span>{article.author}</span>
          </div>
          <span>{article.publishedAt}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => hasSubscription && onBookmark(article.id)}
              disabled={!hasSubscription}
              className={`p-1.5 rounded-full transition-colors ${
                isBookmarked && hasSubscription
                  ? "text-green-600 bg-green-50"
                  : hasSubscription
                  ? "text-gray-400 hover:text-green-600 hover:bg-green-50"
                  : "text-gray-300 cursor-not-allowed"
              }`}
            >
              <Bookmark
                size={14}
                fill={isBookmarked && hasSubscription ? "currentColor" : "none"}
              />
            </button>
            <button
              disabled={!hasSubscription}
              className={`p-1.5 rounded-full transition-colors ${
                hasSubscription
                  ? "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                  : "text-gray-300 cursor-not-allowed"
              }`}
            >
              <Share2 size={14} />
            </button>
          </div>
        </div>
        {!hasSubscription && (
          <ContentLockOverlay onSubscribeClick={onSubscribeClick} />
        )}
      </div>
    </article>
  );
};

export default ArticleCard;
