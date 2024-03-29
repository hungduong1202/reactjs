import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Route } from "react-router-dom";
import HeaderHome from "../../Component/HeaderHome/HeaderHome";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export default function AdminTemplate(props) {
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({
      collapsed,
    });
  };

  const { collapsed } = state;

  return (
    <Route exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div className="logo" />
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
            </Sider>
            <Layout className="site-layout">
              <HeaderHome
                className="site-layout-background"
                style={{
                  padding: 0,
                }}
              />
              <Content
                style={{
                  margin: "0 16px",
                }}
              >
                <Breadcrumb
                  style={{
                    margin: "16px 0",
                  }}
                >
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    minHeight: 360,
                  }}
                >
                  <props.component {...propsRoute}/>
                </div>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        );
      }}
    ></Route>
  );
}
