import React from 'react';
import { Bell, Search, User, Calendar, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search packages, bookings..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <nav className="hidden md:flex ml-8 space-x-4">
              <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Today</button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">This Week</button>
              <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">This Month</button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Calendar className="h-6 w-6" />
            </button>
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <HelpCircle className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3 ml-2">
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-gray-700">Admin User</span>
                <span className="text-xs text-gray-500">Super Admin</span>
              </div>
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-2 bg-gray-50 border-t border-gray-200">
        <div className="flex space-x-4 text-sm">
          <span className="text-gray-500">
            <strong className="text-gray-900">24</strong> Active Packages
          </span>
          <span className="text-gray-500">
            <strong className="text-gray-900">156</strong> Monthly Bookings
          </span>
          <span className="text-gray-500">
            <strong className="text-gray-900">98.5%</strong> On-Time Delivery
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;