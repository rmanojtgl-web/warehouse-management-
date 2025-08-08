import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside style={{ width: '200px', padding: '1rem', background: '#f0f0f0' }}>
      <h3>Sidebar</h3>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
