// pages/admin/index.js
import React from 'react';
import Dashboard from './Dashboard'; // ✅ düzeltildi
import Layout from '../../components/layout/Layout';

const AdminPage = () => {
  return (
    <Layout showNavbar={false} showFooter={false}>
      <Dashboard />
    </Layout>
  );
};

export default AdminPage;
