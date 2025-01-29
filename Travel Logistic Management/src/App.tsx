import React, { useState } from 'react';
import { Package, Users, Truck, Warehouse, Calendar, Map, Settings, PieChart } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Packages from './components/Packages';
import Transport from './components/Transport';
import Inventory from './components/Inventory';
import Bookings from './components/Bookings';
import Customers from './components/Customers';
import Locations from './components/Locations';
import SettingsPanel from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: PieChart },
    { id: 'packages', label: 'Travel Packages', icon: Package },
    { id: 'transport', label: 'Transportation', icon: Truck },
    { id: 'inventory', label: 'Inventory', icon: Warehouse },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'locations', label: 'Locations', icon: Map },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'packages':
        return <Packages />;
      case 'transport':
        return <Transport />;
      case 'inventory':
        return <Inventory />;
      case 'bookings':
        return <Bookings />;
      case 'customers':
        return <Customers />;
      case 'locations':
        return <Locations />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar menuItems={menuItems} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;