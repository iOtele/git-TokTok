import React from "react";
import ArticleMeta from "../Components/ArticleMeta";
import ArticleActions from "../Components/ArticleActions";
import ContentLockOverlay from "../Components/ContentLockOverlay";
import { Lock } from "lucide-react";

const FeatureArticle = ({
  article,
  onBookmark,
  isBookmarked,
  hasSubscription,
  onSubscribeClick,
}) => {
  if (!article) return null;

  return (
    <div className="mb-8">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
        <div className="relative h-64 sm:h-80">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {article.isBreaking && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded">
              BREAKING
            </div>
          )}
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 text-xs font-medium rounded">
            {article.category}
          </div>
        </div>
        <div className="p-6 relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {hasSubscription
              ? article.excerpt
              : `${article.excerpt.substring(0, 100)}...`}
          </p>

          <ArticleMeta article={article} />
          <ArticleActions
            article={article}
            onBookmark={onBookmark}
            isBookmarked={isBookmarked}
            hasSubscription={hasSubscription}
          />
          {!hasSubscription && (
            <ContentLockOverlay onSubscribeClick={onSubscribeClick} />
          )}
          {/* {!hasSubscription && (
            <div className="absolute inset-0 bg-white/90 flex items-center justify-center z-10">
              <button
                onClick={onSubscribeClick}
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                Subscribe to Unlock
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default FeatureArticle;
