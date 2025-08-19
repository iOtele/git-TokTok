import React from "react";
import { Search } from "lucide-react";

const MobileMenu = ({
  isMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  subscription,
  onSubscribeClick,
}) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-gray-200">
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            disabled={!subscription}
          />
        </div>
        {!subscription && (
          <button
            onClick={onSubscribeClick}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Subscribe Now
          </button>
        )}
        <nav className="flex flex-col space-y-2">
          <a
            href="#"
            className="text-gray-800 hover:text-green-600 font-medium py-2"
          >
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 py-2">
            Politics
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 py-2">
            Business
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 py-2">
            Sports
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 py-2">
            Entertainment
          </a>
          <a href="#" className="text-gray-600 hover:text-green-600 py-2">
            SMS Service
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
