import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState } from 'react';
  import { AiOutlineUser } from "react-icons/ai";
  import{CiDeliveryTruck} from "react-icons/ci"

  const { Header, Sider, Content } = Layout;
  const Mainlayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout className='ant-Layout'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <AiOutlineUser />,
                label: 'Sellers',
            

              },
              {
                key: '2',
                icon: <CiDeliveryTruck />,
                label: 'Delivery Partners',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Consumers',
                
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
        <h1>this is dashboard</h1>
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Mainlayout;