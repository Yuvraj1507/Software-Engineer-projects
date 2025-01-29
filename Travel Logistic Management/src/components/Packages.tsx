import React, { useState } from 'react';
import { Package, Plus, Search, Filter, Map } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Paris Adventure',
    destination: 'Paris, France',
    duration: '7 days',
    price: 2499,
    availability: 24,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80',
    description: 'Experience the magic of Paris with guided tours and luxury accommodations.',
    included: ['Flight', 'Hotel', 'Transfers', 'Guided Tours'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: 'Tokyo Explorer',
    destination: 'Tokyo, Japan',
    duration: '10 days',
    price: 3299,
    availability: 18,
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&q=80',
    description: 'Discover Tokyo\'s blend of modern technology and traditional culture.',
    included: ['Flight', 'Hotel', 'Rail Pass', 'Cultural Activities'],
    rating: 4.9,
    reviews: 142
  },
  {
    id: 3,
    name: 'Safari Adventure',
    destination: 'Nairobi, Kenya',
    duration: '8 days',
    price: 4599,
    availability: 12,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    description: 'Experience African wildlife up close with luxury safari accommodations.',
    included: ['Flight', 'Lodge', 'Safari Vehicle', 'Guide'],
    rating: 4.7,
    reviews: 98
  }
];

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Travel Packages</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Package
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search packages..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center hover:bg-gray-50">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="relative h-48">
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                {pkg.duration}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Map className="h-4 w-4 mr-1" />
                    {pkg.destination}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${pkg.price}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.included.map((item, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="text-yellow-400">★</div>
                  <div className="ml-1 text-gray-700">{pkg.rating}</div>
                  <div className="ml-1 text-gray-500">({pkg.reviews} reviews)</div>
                </div>
                <div className="text-sm text-gray-500">
                  {pkg.availability} spots left
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;