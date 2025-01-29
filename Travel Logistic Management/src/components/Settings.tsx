import React from 'react';
import { Settings, User, Bell, Lock, Globe, Palette, HelpCircle } from 'lucide-react';

const SettingsPanel = () => {
  const settingsSections = [
    {
      id: 'profile',
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your account information and preferences'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      description: 'Configure your notification preferences'
    },
    {
      id: 'security',
      title: 'Security',
      icon: Lock,
      description: 'Update your security settings and passwords'
    },
    {
      id: 'localization',
      title: 'Localization',
      icon: Globe,
      description: 'Set your language and regional preferences'
    },
    {
      id: 'appearance',
      title: 'Appearance',
      icon: Palette,
      description: 'Customize the look and feel of your dashboard'
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: HelpCircle,
      description: 'Get help and access documentation'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">{section.title}</h3>
              </div>
              <p className="text-gray-600">{section.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPanel;