import React from 'react';
import { MapPin, Globe, Building2, Navigation, Plane, Train, Bus } from 'lucide-react';

const Locations = () => {
  const locationStats = [
    { label: 'Total Destinations', value: '156', change: '+8%', icon: Globe, color: 'bg-blue-500' },
    { label: 'Active Routes', value: '89', change: '+12%', icon: Navigation, color: 'bg-green-500' },
    { label: 'Partner Hotels', value: '234', change: '+15%', icon: Building2, color: 'bg-purple-500' },
    { label: 'Transport Hubs', value: '45', change: '+5%', icon: Plane, color: 'bg-yellow-500' },
  ];

  const destinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      type: 'City',
      activePackages: 12,
      activeBookings: 89,
      transportOptions: ['Air', 'Rail', 'Bus'],
      weather: 'Sunny, 22°C',
      status: 'Peak Season'
    },
    {
      id: 2,
      name: 'Tokyo',
      country: 'Japan',
      type: 'City',
      activePackages: 8,
      activeBookings: 64,
      transportOptions: ['Air', 'Rail'],
      weather: 'Cloudy, 18°C',
      status: 'Regular'
    },
    {
      id: 3,
      name: 'Safari Park',
      country: 'Kenya',
      type: 'Adventure',
      activePackages: 5,
      activeBookings: 32,
      transportOptions: ['Air', 'Ground'],
      weather: 'Sunny, 28°C',
      status: 'Peak Season'
    }
  ];

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'Air':
        return Plane;
      case 'Rail':
        return Train;
      case 'Bus':
      case 'Ground':
        return Bus;
      default:
        return Navigation;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Locations Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <MapPin className="h-5 w-5 mr-2" />
          Add Location
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {locationStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <span className="ml-2 text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Active Destinations</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Packages
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transport
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weather
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {destinations.map((destination) => (
                  <tr key={destination.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{destination.name}</div>
                          <div className="text-sm text-gray-500">{destination.country}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{destination.activePackages} packages</div>
                      <div className="text-sm text-gray-500">{destination.activeBookings} bookings</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {destination.transportOptions.map((transport, index) => {
                          const TransportIcon = getTransportIcon(transport);
                          return (
                            <div key={index} className="p-1 bg-gray-100 rounded">
                              <TransportIcon className="h-4 w-4 text-gray-600" />
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {destination.weather}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        destination.status === 'Peak Season'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {destination.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;