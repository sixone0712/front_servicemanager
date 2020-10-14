import React, { useState } from 'react';
import { Layout, Menu, Table, Breadcrumb, Button, Space, Row } from 'antd';
import { DownloadOutlined, SyncOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Column, ColumnGroup } = Table;

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
  console.log('selectedRowKeys', selectedRowKeys);

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: (record, selected, selectedRows) => {
      console.log('OnSelect', record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log('onSelectAll', selected, selectedRows, changeRows);
      if (selected) {
        setSelectedRowKeys(data.map(item => item.key));
      } else {
        setSelectedRowKeys([]);
      }
    },
  };
  return (
    // <Layout style={{ padding: '0 24px 24px' }}>
    <Layout>
      <Content
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
          // style={{
          //   minWidth: '675px',
          // }}
        >
          <Column
            title="File Type"
            dataIndex="fileType"
            key="fileType"
            align="center"
            width="35%"
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
            width="50%"
          />
          <Column
            title="File Size"
            dataIndex="fileSize"
            key="fileSize"
            align="center"
            width="15%"
          />
        </Table>
      </Content>
    </Layout>
  );
}

export default LogTable;
