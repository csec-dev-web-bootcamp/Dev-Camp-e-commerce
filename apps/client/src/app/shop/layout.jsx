"use client";
import Link from "next/link";
import React from "react";
import { useCollapsed } from "@app/client/store/collapse";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useSelectedMenu } from "@app/client/store/selectedMenuItem";
const { Header, Sider, Content } = Layout;

export default function layout({ children }) {
  const { isCollapsed, setIsCollapsed } = useCollapsed();
  const { selectedMenuItem, setSelectedMenuItem } = useSelectedMenu();
  // const [collapsed, setCollapsed] = useState(false);
  // const [selectedMenuItem, setSelectedMenuItem] = useState(null); // Track the selected menu item

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <l>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleMenuClick} // Handle menu item click event
        >
          <Menu.Item key="1" icon={<UserOutlined />} label="Male Cloth">
            <Link href="/shop/mensClothing">
              <li>Male Cloth</li>
            </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<UserOutlined />} label="Female Cloth">
            <Link href="/shop/womenClothing">
              <li>Female Cloth</li>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<VideoCameraOutlined />} label="Electronics">
            <Link href="/shop/electronics">
              <li>Electronics</li>
            </Link>
          </Menu.Item>

          <Menu.Item key="4" icon={<UploadOutlined />} label="Jewelry">
            <Link href="/shop/jewelery">
              <li>Jewelery</li>
            </Link>
          </Menu.Item>

          {/* <Menu.Item key="5" icon={<UserOutlined />} label="Detail Cloth">
            <Link href="shop/detail">
              <li>Detail</li>
            </Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 400,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </l>
  );
}
