import React from 'react';
import Sidebar from '../../components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />

      <div>
        Content
      </div>

    </div>
  )
}

export default Dashboard;