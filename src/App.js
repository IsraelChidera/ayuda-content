import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import './index.css';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setTimeout(() => {      
      setLoader(true);
    }, 8000)
  }, [])

  return (
    <div className="App bg-white">
      {
        !loader?
        (
          
            <div id="load" className="text-8xl  space-x-4">
              <div>.</div>
              <div>.</div>
              <div>A</div>
              <div>D</div>
              <div>U</div>
              <div>Y</div>
              <div>A</div>
            </div>
        
        )
        :
        (
          <div>            
            < Navbar />

            <Routes>
              <Route exact path="/" element={<LandingPage/>}/>
              <Route path="/plans-pricing" element={<PricingPage/>}/>
              <Route path="/plans-pricing/payment" element={<Checkout/>}/>
            </Routes>

            < Footer />
          </div>
        )
      }
    </div>
    
  );
}

export default App;
