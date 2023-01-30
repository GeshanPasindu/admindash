import logo from './logo.svg';
import './App.css';
import Mainlayout from './components/Mainlayout';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Seller from './pages/Seller';
import Commission from './pages/Commission';
import Deliverypartners from './pages/Deliverypartners';
import Consumer from './pages/Consumer';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      
        <Routes>
          
          <Route path='/Seller' element={<Seller/>}/>
          <Route path='/' element={<Login/>}/>
          {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}
          <Route path='/Commission' element={<Commission/>}/>
          <Route path='/Delivery' element={<Deliverypartners/>}/>
          <Route path='/Consumers' element={<Consumer/>}/>
          
          <Route path='/Admin' element={<Mainlayout/>}><Route index element={<Home/>}/></Route>

        </Routes>
   
    </div>
  );
}

export default App;
