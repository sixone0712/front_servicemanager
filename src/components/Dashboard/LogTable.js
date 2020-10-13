import React, { useState } from 'react';
import { Layout, Menu, Table, Breadcrumb, Button, Space, Row } from 'antd';
import { DownloadOutlined, SyncOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Column, ColumnGroup } = Table;

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    filters: [
      {
        text: 'Tomcat Log',
        value: 'Tomcat Log',
      },
      {
        text: 'User Log',
        value: 'User Log',
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: 'File Name',
    dataIndex: 'fileName',
  },
  {
    title: 'File Size',
    dataIndex: 'fileSize',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    fileType: `Tomcat Log`,
    fileName: 'tomcat.log',
    fileSize: `24 KB`,
  });
}

function LogTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    // <Layout style={{ padding: '0 24px 24px' }}>
    <Layout>
      <Content
        className="site-layout-background"
        style={{
          paddingLeft: '24px',
          margin: 0,
          minHeight: 280,
        }}
      >
        <Breadcrumb style={{ margin: '10px 0' }}>
          <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
          <Breadcrumb.Item>Log Download</Breadcrumb.Item>
        </Breadcrumb>
        <Row justify="end" style={{ marginBottom: '10px' }}>
          <Space>
            <Button
              type="primary"
              icon={<SyncOutlined style={{ verticalAlign: 0 }} />}
            >
              Reload
            </Button>
            <Button icon={<DownloadOutlined style={{ verticalAlign: 0 }} />}>
              Download
            </Button>
          </Space>
        </Row>
        <Table
          rowSelection={rowSelection}
          // columns={columns}
          dataSource={data}
          size="small"
          bordered
          pagination={{ pageSize: 7, position: ['bottomCenter'] }}
          tableLayout="fixed"
        >
          <Column
            title="File Type"
            dataIndex="fileType"
            key="fileType"
            align="center"
            // width="15%"
            filters={[
              {
                text: 'Tomcat Log',
                value: 'Tomcat Log',
              },
              {
                text: 'User Log',
                value: 'User Log',
              },
            ]}
            onFilter={(value, record) => record.fileType.indexOf(value) === 0}
          />
          <Column
            title="File Name"
            dataIndex="fileName"
            key="fileName"
            align="center"
            // width="15%"
          />
          <Column
            title="File Size"
            dataIndex="fileSize"
            key="fileSize"
            align="center"
            // width="15%"
          />
        </Table>
      </Content>
    </Layout>
  );
}

export default LogTable;
