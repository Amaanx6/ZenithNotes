"use client"

import React, { useState } from 'react'; // Combine imports, remove duplicate
import { Menu, X } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

interface SidebarProps {
  menuItems: MenuItem[];
  footerItems: MenuItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  logo: React.ReactNode;
}

export default function Sidebar({ menuItems, footerItems, activeTab, onTabChange, logo }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.onClick) {
      item.onClick();
    } else {
      onTabChange(item.id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#1e1e1e] text-white"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="bg-[#121212] h-full w-64 shadow-lg flex flex-col">
          <div className="p-4 border-b border-[#2a2a2a]">{logo}</div>
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === item.id
                      ? 'bg-indigo-900/30 text-indigo-400'
                      : 'text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t border-[#2a2a2a]">
            <nav className="px-2 space-y-1">
              {footerItems.map((item) => (
                <button
                  key={item.id}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                  onClick={() => handleItemClick(item)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-[#121212] border-r border-[#2a2a2a]">
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-[#2a2a2a]">{logo}</div>
          <div className="flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === item.id
                      ? 'bg-indigo-900/30 text-indigo-400'
                      : 'text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 border-t border-[#2a2a2a] p-4">
            <nav className="space-y-1">
              {footerItems.map((item) => (
                <button
                  key={item.id}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-[#2a2a2a] hover:text-white"
                  onClick={() => handleItemClick(item)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Content padding for desktop */}
      <div className="hidden md:block md:pl-64"></div>
    </>
  );
}