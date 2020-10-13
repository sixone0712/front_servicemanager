import React from 'react';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function LogSilder() {
  return (
    <Sider width={250}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">ESP_01</Menu.Item>
        <Menu.Item key="2">OTS_01</Menu.Item>
        <Menu.Item key="3">OTS_02</Menu.Item>
        {/* <Menu.Item key="4">option4</Menu.Item> */}
        {/* <Menu.Item key="5">option5</Menu.Item> */}
        {/* <Menu.Item key="6">option6</Menu.Item> */}
        {/* <Menu.Item key="7">option7</Menu.Item> */}
        {/* <Menu.Item key="8">option8</Menu.Item> */}
        {/* <Menu.Item key="9">option9</Menu.Item> */}
        {/* <Menu.Item key="10">option10</Menu.Item> */}
        {/* <Menu.Item key="11">option11</Menu.Item> */}
        {/* <Menu.Item key="12">option12</Menu.Item> */}
      </Menu>
    </Sider>
  );
}

export default LogSilder;
