// import React from "react";
// import { Layout, Menu, Row, Col } from "antd";
// import LogTable from "./LogTable";
//
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;
//
// function LogDownload() {
//   return (
//     <>
//       <Layout style={{ padding: "24px 0" }}>
//         <Sider
//           style={{
//             overflow: "auto",
//             width: "300px",
//             height: "55vh",
//             position: "fixed",
//             left: 0,
//           }}
//         >
//           <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
//             <Menu.Item key="1">option1</Menu.Item>
//             <Menu.Item key="2">option2</Menu.Item>
//             <Menu.Item key="3">option3</Menu.Item>
//             <Menu.Item key="4">option4</Menu.Item>
//             <Menu.Item key="5">option5</Menu.Item>
//             <Menu.Item key="6">option6</Menu.Item>
//             <Menu.Item key="7">option7</Menu.Item>
//             <Menu.Item key="8">option8</Menu.Item>
//             <Menu.Item key="9">option9</Menu.Item>
//             <Menu.Item key="10">option10</Menu.Item>
//             <Menu.Item key="11">option11</Menu.Item>
//             <Menu.Item key="12">option12</Menu.Item>
//             <Menu.Item key="13">option13</Menu.Item>
//             <Menu.Item key="14">option14</Menu.Item>
//             <Menu.Item key="15">option15</Menu.Item>
//             <Menu.Item key="16">option16</Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout style={{ padding: "0 24px 24px" }}>
//           <Content
//             className="site-layout-background"
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     </>
//   );
// }
//
// export default LogDownload;

import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import LogTable from "./LogTable";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function LogDownload() {
  return (
    <Layout style={{ paddingLeft: "24px", height: '450px' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
            <Menu.Item key="1">ESP_01</Menu.Item>
            <Menu.Item key="2">OTS_01</Menu.Item>
            <Menu.Item key="3">OTS_02</Menu.Item>
            {/*<Menu.Item key="4">option4</Menu.Item>*/}
            {/*<Menu.Item key="5">option5</Menu.Item>*/}
            {/*<Menu.Item key="6">option6</Menu.Item>*/}
            {/*<Menu.Item key="7">option7</Menu.Item>*/}
            {/*<Menu.Item key="8">option8</Menu.Item>*/}
            {/*<Menu.Item key="9">option9</Menu.Item>*/}
            {/*<Menu.Item key="10">option10</Menu.Item>*/}
            {/*<Menu.Item key="11">option11</Menu.Item>*/}
            {/*<Menu.Item key="12">option12</Menu.Item>*/}
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            margin: 0,
            minHeight: 280,
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
            <Breadcrumb.Item>Log Download</Breadcrumb.Item>
          </Breadcrumb>
          <LogTable />
        </Content>
      </Layout>
    </Layout>
  );
}

export default LogDownload;
