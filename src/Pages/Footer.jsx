import React from "react";
import { Search, Menu, X, Clock, User, MessageSquare, Share2, Bookmark, TrendingUp, Globe, Smartphone, Eye, ChevronRight, Bell, Calendar, Lock, Mail, Phone, Check, AlertCircle } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-green-400">TokTok</h2>
                <p className="text-gray-400 text-sm">Your Daily Gist Recap</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Stay informed with curated news summaries and promote your
              business to thousands of subscribers across all Nigerian networks.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Facebook
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Twitter
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                Instagram
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  SMS Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Advertise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Politics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>
            &copy; 2025 TokTok News. All rights reserved. | SMS services
            available on all Nigerian networks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
