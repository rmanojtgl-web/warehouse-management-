
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import InventoryList from './components/InventoryList';
import OrderList from './components/OrderList';
import { Page } from './types';
import { mockProducts, mockInventory, mockOrders } from './services/mockData';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard products={mockProducts} inventory={mockInventory} orders={mockOrders} />;
      case 'inventory':
        return <InventoryList products={mockProducts} inventory={mockInventory} />;
      case 'orders':
        return <OrderList orders={mockOrders} products={mockProducts} inventory={mockInventory} />;
      default:
        return <Dashboard products={mockProducts} inventory={mockInventory} orders={mockOrders} />;
    }
  };

  return (
    <div className="flex">
      <Sidebar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-1 ml-64 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;