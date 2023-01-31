import React from 'react'
import Mainlayout from '../components/Mainlayout'
import { Card } from 'antd';
import { AiFillShop} from "react-icons/ai";
import {CiDeliveryTruck} from "react-icons/ci";
import {FaUserCircle,FaMoneyBillWave, FaBorderAll} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className='cardsdiv'>
       <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )"
      
    }}
  >
     <AiFillShop className='fs-3'/>
     <h4>12354</h4>
     <h2>Sellers</h2>
  </Card>

  <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )"
    }}
  >
    <CiDeliveryTruck className='fs-2'/>
    <h4>12354</h4>
     <h2>Delivery Partners</h2>
  </Card>

  <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )"
    }}
  >
    <FaUserCircle className='fs-2'/>
    <h4>12354</h4>
     <h2>Consumers</h2>
  </Card>

  <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )"
      
    }}
  >
    <FaMoneyBillWave className='fs-2'/>
  <h4>12354</h4>
     <h2>Commission</h2>
  </Card>

  
        </div>
  )
}

export default Dashboard