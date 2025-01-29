import React from 'react';
import { Truck, Plane, Train, Bus, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const Transport = () => {
  const transportStats = [
    { label: 'Active Vehicles', value: '45', icon: Truck, color: 'bg-blue-500' },
    { label: 'On Route', value: '28', icon: Plane, color: 'bg-green-500' },
    { label: 'Maintenance', value: '7', icon: AlertCircle, color: 'bg-yellow-500' },
    { label: 'Available', value: '10', icon: CheckCircle2, color: 'bg-purple-500' },
  ];

  const transportSchedule = [
    {
      id: 1,
      type: 'Flight',
      icon: Plane,
      route: 'Paris → London',
      departure: '09:00 AM',
      arrival: '10:15 AM',
      status: 'On Time',
      passengers: 180,
      vehicle: 'A320-200'
    },
    {
      id: 2,
      type: 'Train',
      icon: Train,
      route: 'London → Edinburgh',
      departure: '11:30 AM',
      arrival: '16:45 PM',
      status: 'Delayed',
      passengers: 245,
      vehicle: 'Express 425'
    },
    {
      id: 3,
      type: 'Bus',
      icon: Bus,
      route: 'Edinburgh → Glasgow',
      departure: '14:00 PM',
      arrival: '15:30 PM',
      status: 'On Time',
      passengers: 42,
      vehicle: 'Coach 89'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Transportation Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {transportStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Transport Schedule</h2>
          <div className="space-y-4">
            {transportSchedule.map((schedule) => {
              const Icon = schedule.icon;
              return (
                <div key={schedule.id} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{schedule.route}</div>
                      <div className="text-sm text-gray-500">{schedule.type}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{schedule.departure}</div>
                      <div className="text-sm text-gray-500">Departure</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{schedule.arrival}</div>
                      <div className="text-sm text-gray-500">Arrival</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{schedule.vehicle}</div>
                      <div className="text-sm text-gray-500">{schedule.passengers} passengers</div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      schedule.status === 'On Time' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Vehicle Maintenance</h2>
          {/* Add maintenance schedule component */}
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Route Analytics</h2>
          {/* Add route analytics component */}
        </div>
      </div>
    </div>
  );
};

export default Transport;