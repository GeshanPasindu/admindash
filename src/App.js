import logo from './logo.svg';
import './App.css';
import Mainlayout from './components/Mainlayout';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Seller from './pages/Seller';
import Commission from './pages/Commission';
import Deliverypartners from './pages/Deliverypartners';
import Consumer from './pages/Consumer';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Mainlayout/>}/>
          <Route path='/Seller' element={<Seller/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Commission' element={<Commission/>}/>
          <Route path='/Delivery' element={<Deliverypartners/>}/>
          <Route path='/Consumers' element={<Consumer/>}/>
          

        </Routes>
   
    </div>
  );
}

export default App;
