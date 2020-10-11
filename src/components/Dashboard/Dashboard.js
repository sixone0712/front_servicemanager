import React from "react";
import { Layout, Menu, Breadcrumb, Divider } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import StatusTable from "./StatusTable";
import LogDownload from "./LogDownload/LogDownload";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const logoStyle = {
  width: "120px",
  height: "31px",
  margin: "16px 28px 16px 0",
  float: "left",
  lineHeight: "31px",
  color: "white",
};

function Dashboard() {
  return (
    <>
      <Layout>
        <Header className="header">
          <div style={logoStyle}>Service Manager</div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">nav 1</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Layout
            className="site-layout-background"
          >
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <StatusTable />
            </Content>
          </Layout>
        </Content>
        <Divider plain></Divider>
        <Content>
          <LogDownload />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default Dashboard;
