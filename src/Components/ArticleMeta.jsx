import React from "react";
import { Clock, User } from "lucide-react";

const ArticleMeta = ({ article }) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <User size={16} />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={16} />
          <span>{article.publishedAt}</span>
        </div>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>
    </div>
  );
};

export default ArticleMeta;
