import React from 'react';
import { Box, Package, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';

const Inventory = () => {
  const inventoryStats = [
    {
      label: 'Total Items',
      value: '2,456',
      change: '+12%',
      icon: Box,
      color: 'bg-blue-500'
    },
    {
      label: 'Low Stock',
      value: '18',
      change: '-5%',
      icon: AlertTriangle,
      color: 'bg-yellow-500'
    },
    {
      label: 'Packages Ready',
      value: '342',
      change: '+28%',
      icon: Package,
      color: 'bg-green-500'
    },
    {
      label: 'Monthly Turnover',
      value: '865',
      change: '+18%',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const inventoryItems = [
    {
      id: 1,
      name: 'Travel Guides - Paris',
      category: 'Books',
      stock: 145,
      reorderPoint: 50,
      status: 'In Stock',
      lastUpdated: '2024-03-15'
    },
    {
      id: 2,
      name: 'Universal Power Adapters',
      category: 'Electronics',
      stock: 28,
      reorderPoint: 30,
      status: 'Low Stock',
      lastUpdated: '2024-03-14'
    },
    {
      id: 3,
      name: 'First Aid Kits',
      category: 'Safety',
      stock: 89,
      reorderPoint: 40,
      status: 'In Stock',
      lastUpdated: '2024-03-13'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
          <Box className="h-5 w-5 mr-2" />
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventoryStats.map((stat, index) => {
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
                    <span className="ml-2 text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Inventory Items</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.stock}</div>
                      <div className="text-xs text-gray-500">Reorder at {item.reorderPoint}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'In Stock'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.lastUpdated}
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

export default Inventory;