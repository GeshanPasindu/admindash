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
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )",
      border: "2px solid white"
      
    }}
  >
     <AiFillShop className='fs-3'/>
     <h4>12354</h4>
     <h2>Sellers</h2>
  </Card>

  <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )",
      border: "2px solid white"
    }}
  >
    <CiDeliveryTruck className='fs-2'/>
    <h4>12354</h4>
     <h2>Delivery Partners</h2>
  </Card>

  <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )",
      border: "2px solid white"
    }}
  >
    <FaUserCircle className='fs-2'/>
    <h4>12354</h4>
     <h2>Consumers</h2>
  </Card>

  <Card
    style={{
      width: 300,
      background: "linear-gradient(to right, #00b0ff,#89CFF0 )",
      border: "2px solid white"

      
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