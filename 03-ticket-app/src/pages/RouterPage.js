import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { Ingresar } from "./Ingresar";
import { Cola } from "./Cola";
import { CrearTicket } from "./CrearTicket";
import { Escritorio } from "./Escritorio";

const { Header, Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider collapsedWidth="0" breakpoint="md">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/ingresar">Ingresar</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/cola">Cola</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/crear">Crear Ticketo</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/ingresar" component={Ingresar} />
                <Route exact path="/cola" component={Cola} />
                <Route exact path="/crear" component={CrearTicket} />

                <Route exact path="/escritorio" component={Escritorio} />

                <Redirect to="/ingresar" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};
