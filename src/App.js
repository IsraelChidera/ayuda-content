import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import Admin from './pages/Admin';
import './index.css';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setTimeout(() => {      
      setLoader(true);
    }, 4000)
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
          <div className='relative'>            
            <div className='bg-white fixed top-0 left-0 w-full z-10'>
              < Navbar />
            </div>

            <div className="mt-16">
              <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route path="/plans-pricing" element={<PricingPage/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/plans-pricing/payment" element={<Checkout/>}/>
              </Routes>
            </div>

            <div>
              < Footer />
            </div>
          </div>
        )
      }
    </div>
    
  );
}

export default App;
