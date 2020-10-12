import React, { useCallback } from 'react';
import {
  Table,
  Tag,
  Space,
  Spin,
  Row,
  Col,
  Layout,
  Breadcrumb,
  Button,
} from 'antd';
import { RedoOutlined, SyncOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Column, ColumnGroup } = Table;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <div>{text}</div>,
  },
  {
    title: 'IP Address',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: 'Docker Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Docker Restart',
    dataIndex: 'dockerRestart',
    key: 'dockerRestart',
  },
  {
    title: 'OS Restart',
    dataIndex: 'osRestart',
    key: 'osRestart',
  },
  /*
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
   */
];

const data = [
  {
    key: '1',
    type: 'ESP',
    name: 'ESP_01',
    ip: '10.1.31.143',
    status: ['Rapid Collector (Up 12 seconds)', 'Postgres (Exited 12 seconds)'],
    volume: '100G / 500G',
    dockerRestart: 'Restart',
    osRestart: 'Restart',
  },
  {
    key: '2',
    type: 'OTS',
    name: 'OTS_01',
    ip: '10.1.31.144',
    status: ['File Service Collect (Up 12 seconds)'],
    volume: '100G / 500G',
    dockerRestart: 'Restart',
    osRestart: 'Restart',
  },
  {
    key: '3',
    type: 'OTS',
    name: 'OTS_02',
    ip: '10.1.31.144',
    status: ['File Service Collect (Up 12 seconds)'],
    volume: '100G / 500G',
    dockerRestart: 'Restart',
    osRestart: 'Restart',
  },
  {
    key: '4',
    type: 'OTS',
    name: 'OTS_03',
    ip: '10.1.31.144',
    status: ['File Service Collect (Up 12 seconds)'],
    volume: '100G / 500G',
    dockerRestart: 'Restart',
    osRestart: 'Restart',
  },
  {
    key: '4',
    type: 'OTS',
    name: 'OTS_05',
    ip: '10.1.31.144',
    status: ['Unknown'],
    volume: '100G / 500G',
    dockerRestart: 'Restart',
    osRestart: 'Restart',
  },
  {
    key: '5',
    type: 'OTS',
    name: 'OTS_06',
    ip: '10.1.31.144',
    status: ['File Service Collect (Up 12 seconds)'],
    volume: '100G / 500G',
    dockerRestart: 'Restart',
    osRestart: 'Restart',
  },
];

const StatusColor = styled(Col)`
  color: ${({ status }) => {
    if (status.includes('Up')) {
      return '#90EE90'; // LightGreen
    }
    if (status.includes('Exited')) {
      return '#FF4500'; // OragneRed
    }
    return '#778899'; // LightSlateGray
  }};
`;

const StatusText = styled(Col)`
  padding-left: 5px;
`;

function StatusTable() {
  const renderStatus = (text, record, index) => {
    console.log('name', text);
    console.log('record', record);
    console.log('index', index);
    return (
      <>
        {text.map(item => (
          <Row justify="center">
            <StatusColor status={item}>●</StatusColor>
            <StatusText>{item}</StatusText>
          </Row>
        ))}
      </>
    );
  };

  return (
    <Layout style={{ height: '360px' }}>
      <Breadcrumb style={{ margin: '10px 0' }}>
        <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
        <Breadcrumb.Item>Device Status</Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="end" style={{ marginBottom: '10px' }}>
        <Button
          style={{ width: '100px' }}
          type="primary"
          icon={<SyncOutlined style={{ verticalAlign: 0 }} />}
        >
          Reload
        </Button>
      </Row>
      <Table
        tableLayout="fixed"
        size="small"
        bordered
        dataSource={data}
        // scroll={{ y: 185 }}
        pagination={{ pageSize: 4, position: ['bottomCenter'] }}
      >
        <Column
          title="Name"
          dataIndex="name"
          key="name"
          align="center"
          width="15%"
        />
        <Column
          title="IP Address"
          dataIndex="ip"
          key="ip"
          align="center"
          width="15%"
        />
        <Column
          title="Docker Status"
          dataIndex="status"
          key="status"
          align="center"
          width="35%"
          render={renderStatus}
        />
        <Column
          title="Volume"
          dataIndex="volume"
          key="volume"
          align="center"
          width="15%"
        />
        <Column
          title="Docker Restart"
          dataIndex="dockerRestart"
          key="dockerRestart"
          align="center"
          width="15%"
          render={(text, record, index) => {
            return <RedoOutlined />;
          }}
        />
        <Column
          title="OS Restart"
          dataIndex="osRestart"
          key="osRestart"
          align="center"
          width="15%"
          render={(text, record, index) => {
            console.log('name', text);
            console.log('record', record);
            console.log('index', index);
            return (
              <RedoOutlined
                onClick={() => {
                  alert('restart');
                }}
              />
            );
          }}
        />
      </Table>
    </Layout>
  );
}

export default StatusTable;
