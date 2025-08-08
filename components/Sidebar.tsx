import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setPage }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 fixed">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul>
        <li
          className={`p-2 cursor-pointer ${currentPage === 'dashboard' ? 'bg-gray-700' : ''}`}
          onClick={() => setPage('dashboard')}
        >
          Dashboard
        </li>
        <li
          className={`p-2 cursor-pointer ${currentPage === 'inventory' ? 'bg-gray-700' : ''}`}
          onClick={() => setPage('inventory')}
        >
          Inventory
        </li>
        <li
          className={`p-2 cursor-pointer ${currentPage === 'orders' ? 'bg-gray-700' : ''}`}
          onClick={() => setPage('orders')}
        >
          Orders
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
