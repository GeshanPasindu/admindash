import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import  { SizeType } from 'antd/es/config-provider/SizeContext';

function Login() {
    const navigate = useNavigate();
    const goAdmin = () =>{
         navigate('/Admin');

    }
  return (
    <div>
<Button type="primary" size={5}   onClick={goAdmin}>
            Login
          </Button>
    </div>
  )
}

export default Login