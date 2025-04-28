import React from 'react';
import Layout from '../layouts/Dashboard';
import ChartComponent from '../components/chart/ChartDashboard';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h6 className="text-lg font-semibold text-gray-600">Total Kategori</h6>
            <p className="text-4xl font-bold text-gray-800">15</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h6 className="text-lg font-semibold text-gray-600">Total Produk</h6>
            <p className="text-4xl font-bold text-gray-800">120</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h6 className="text-lg font-semibold text-gray-600">Total User</h6>
            <p className="text-4xl font-bold text-gray-800">50</p>
          </div>
        </div>

        <div className="mt-6">
          <ChartComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
