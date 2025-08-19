import React, { useState, useEffect } from "react";
import BreakingNewsTicker from "../Components/BreakingNewsTicker";
import Header from "../Pages/Header";
import CategoryFilter from "../Pages/CategoryFilter";
import FeaturedArticle from "./FeaturedArticle";
import ArticleCard from "../Components/ArticleCard";
import Sidebar from "../Pages/SideBar";
import Footer from "../Pages/Footer";
import SubscriptionStatus from "../Components/SubscriptionStatus";
import SubscriptionModal from "../Components/SubscriptionModal";
import newsArticles from "../Components/newsArticles";

const TokToknews = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookmarkedArticles, setBookmarkedArticles] = useState(new Set());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [subscription, setSubscription] = useState(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    "All",
    "Politics",
    "Business",
    "Sports",
    "Entertainment",
    "Technology",
    "Environment",
  ];

  const handleSubscription = (subscriptionData) => {
    setSubscription(subscriptionData);
    console.log("Subscription created:", subscriptionData);
  };

  const toggleBookmark = (articleId) => {
    if (!subscription) return;

    const newBookmarks = new Set(bookmarkedArticles);
    if (newBookmarks.has(articleId)) {
      newBookmarks.delete(articleId);
    } else {
      newBookmarks.add(articleId);
    }
    setBookmarkedArticles(newBookmarks);
  };

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      subscription &&
      (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    return subscription
      ? (matchesSearch || searchQuery === "") && matchesCategory
      : matchesCategory;
  });

  const breakingNews = newsArticles.filter((article) => article.isBreaking);
  const featuredArticle = filteredArticles[0];
  const regularArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <BreakingNewsTicker breakingNews={breakingNews} />

      <Header
        currentTime={currentTime}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        subscription={subscription}
        onSubscribeClick={() => setShowSubscriptionModal(true)}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        hasSubscription={!!subscription}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {subscription && (
          <SubscriptionStatus
            subscription={subscription}
            onManageSubscription={() => setShowSubscriptionModal(true)}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedArticle
              article={featuredArticle}
              onBookmark={toggleBookmark}
              isBookmarked={bookmarkedArticles.has(featuredArticle?.id)}
              hasSubscription={!!subscription}
              onSubscribeClick={() => setShowSubscriptionModal(true)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onBookmark={toggleBookmark}
                  isBookmarked={bookmarkedArticles.has(article.id)}
                  hasSubscription={!!subscription}
                  onSubscribeClick={() => setShowSubscriptionModal(true)}
                />
              ))}
            </div>
          </div>

          <Sidebar
            hasSubscription={!!subscription}
            onSubscribeClick={() => setShowSubscriptionModal(true)}
          />
        </div>
      </main>

      <Footer />

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        onSubscribe={handleSubscription}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        `,
        }}
      />
    </div>
  );
};

export default TokToknews;
