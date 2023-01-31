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
              navigate(`/Admin/${key}`)
            }}
            items={[
              {
                key: 'Dashboard',
                icon: <AiOutlineDashboard  className='fs-5' />,
                label: 'Dashboard',
                
              },
              {
                key: 'Seller',
                icon: <AiOutlineUser className='fs-5' />,
                label: 'Sellers',
              
              },
              {
                key: 'Delivery',
                icon: <CiDeliveryTruck className='fs-5' />,
                label: 'Delivery Partners',
              },
              {
                key: 'Consumers',
                icon: <AiOutlineUser className='fs-5' />,
                label: 'Consumers',
                
              },
              {
                key: 'Commission ',
                icon: <AiOutlineDollarCircle className='fs-5' />,
                label: 'Commission',
                
              },
              
              {
                key: 'Logout',
                icon: <AiOutlineLogout className='fs-5' />,
                label: 'Logout',
                
                
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
          className='d-flex justify-content-between ps-3 pe-5'
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
              
            <div><img className='img2' src='https://cdn-icons-png.flaticon.com/512/219/219986.png'/></div>
            <div>
                <h5 >User1</h5>
                <p>user@awakaza.com</p>
              </div>

              <div><img className='img' src='https://circlebook.site/wp-content/uploads/2021/09/awakaza_logo-1024x1024.jpg' 
              alt='compamy logo' ></img></div>
              

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