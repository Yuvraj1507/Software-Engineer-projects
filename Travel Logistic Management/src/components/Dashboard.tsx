import React from 'react';
import { Package, TrendingUp, Users, DollarSign, ArrowRight, Calendar, MapPin, Truck } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Packages',
      value: '24',
      change: '+12%',
      icon: Package,
      color: 'bg-blue-500',
      details: '8 pending approval'
    },
    {
      title: 'Monthly Bookings',
      value: '156',
      change: '+23%',
      icon: TrendingUp,
      color: 'bg-green-500',
      details: '45 this week'
    },
    {
      title: 'Active Customers',
      value: '2,345',
      change: '+18%',
      icon: Users,
      color: 'bg-purple-500',
      details: '320 new this month'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+32%',
      icon: DollarSign,
      color: 'bg-yellow-500',
      details: '$12,345 this week'
    },
  ];

  const recentBookings = [
    {
      id: 1,
      customer: 'John Doe',
      package: 'Paris Adventure',
      date: '2024-03-15',
      status: 'Confirmed',
      location: 'Paris, France',
      amount: '$2,499',
      transport: 'Flight + Hotel'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      package: 'Tokyo Explorer',
      date: '2024-03-14',
      status: 'Pending',
      location: 'Tokyo, Japan',
      amount: '$3,299',
      transport: 'Flight + Rail Pass'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      package: 'Safari Adventure',
      date: '2024-03-13',
      status: 'Completed',
      location: 'Nairobi, Kenya',
      amount: '$4,599',
      transport: 'Flight + Safari Vehicle'
    },
  ];

  const upcomingDepartures = [
    {
      id: 1,
      destination: 'Paris',
      customers: 12,
      date: '2024-03-20',
      status: 'On Track'
    },
    {
      id: 2,
      destination: 'Tokyo',
      customers: 8,
      date: '2024-03-22',
      status: 'Delayed'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <span className="ml-2 text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.details}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Recent Bookings</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Package
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                            <div className="text-sm text-gray-500">{booking.transport}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.package}</div>
                        <div className="text-sm text-gray-500">{booking.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {booking.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Departures */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Upcoming Departures</h2>
            <div className="space-y-4">
              {upcomingDepartures.map((departure) => (
                <div key={departure.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">{departure.destination}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        departure.status === 'On Track' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {departure.status}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {departure.customers} customers
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {departure.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;