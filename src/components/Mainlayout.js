import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState } from 'react';
  import { AiOutlineUser,AiOutlineDollarCircle,AiOutlineDashboard,AiOutlineLogout } from "react-icons/ai";
  import{CiDeliveryTruck} from "react-icons/ci"
  import{RiAdminLine} from "react-icons/ri"
  import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

  const { Header, Sider, Content } = Layout;
  const Mainlayout = ({key}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
      <Layout className='ant-Layout'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" >
          {collapsed ? <RiAdminLine className='fs-2 center'/> : <h2 className='text-center'><RiAdminLine className='fs-2 '/> Admin</h2>}
          
          </div>
          <Menu className='ant-menu-item '
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[key]}
            onClick={({key}) =>{
              navigate(key)
            }}
            items={[
              {
                key: 'Dashboard',
                icon: <AiOutlineDashboard  />,
                label: 'Dashboard',
                
              },
              {
                key: 'Seller',
                icon: <AiOutlineUser />,
                label: 'Sellers',
              
              },
              {
                key: 'Delivery',
                icon: <CiDeliveryTruck />,
                label: 'Delivery Partners',
              },
              {
                key: 'Consumers',
                icon: <AiOutlineUser />,
                label: 'Consumers',
                
              },
              {
                key: 'Commission ',
                icon: <AiOutlineDollarCircle />,
                label: 'Commission',
                
              },
              
              {
                key: '7',
                icon: <AiOutlineLogout />,
                label: 'Logout',
                
                
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
          className='d-flex justify-content-between ps-3 pe-'
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <div className='d-flex gap-3 align-item-center' >
              <div></div>
              <div></div>
              

            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Mainlayout;