import logo from './logo.svg';
import './App.css';
import Mainlayout from './components/Mainlayout';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
   
    </div>
  );
}

export default App;
