import React from 'react';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';

const Dashboard: React.FC = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />

      <Content />

    </div>
  )
}

export default Dashboard;