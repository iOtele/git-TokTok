import React from "react";
import { Search, Menu, X, Clock, Bell, Calendar } from "lucide-react";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import MobileMenu from "../Components/MobileMenu";
const Header = ({
  currentTime,
  searchQuery,
  setSearchQuery,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  subscription,
  onSubscribeClick,
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with time and social */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>
                {currentTime.toLocaleDateString("en-NG", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>
                {currentTime.toLocaleTimeString("en-NG", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!subscription && (
              <button
                onClick={onSubscribeClick}
                className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            )}
            <span className="text-xs">Follow us:</span>
            <button className="text-blue-600 hover:text-blue-800">
              Facebook
            </button>
            <button className="text-blue-400 hover:text-blue-600">
              Twitter
            </button>
            <button className="text-pink-600 hover:text-pink-800">
              Instagram
            </button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavBar />

          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                disabled={!subscription}
              />
            </div>
            <button className="text-gray-600 hover:text-green-600">
              <Bell size={24} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-green-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          subscription={subscription}
          onSubscribeClick={onSubscribeClick}
        />
      </div>
    </header>
  );
};

export default Header;
