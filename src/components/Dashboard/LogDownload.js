import React from 'react';
import { Layout } from 'antd';
import LogSilder from './LogSilder';
import LogTable from './LogTable';

function LogDownload() {
  return (
    // <Layout style={{ paddingLeft: '24px', height: '450px' }}>
    <Layout>
      <LogSilder />
      <LogTable />
    </Layout>
    // </Layout>
  );
}

export default LogDownload;
