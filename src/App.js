import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import Admin from './pages/Admin';
import './index.css';
import Blog from './pages/Blog';
import Posting from './pages/Posting';
import {AuthContextProvider} from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setTimeout(() => {      
      setLoader(true);
    }, 4000)
  }, [])

  return (
    <>
      <AuthContextProvider>
        <div className="App bg-white">
          {
            !loader?
            (
              
                <div id="load" className="text-8xl space-x-4">
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
                
                <div>
                  <Routes>
                    <Route exact path="/" element={<LandingPage/>}/>
                    <Route path="/plans-pricing" element={<PricingPage/>}/>                
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route 
                      path="/posting" 
                      element={
                        <ProtectedRoute>
                          <Posting/>
                        </ProtectedRoute>
                        
                      }
                    />
                    <Route path="/plans-pricing/payment" element={<Checkout/>}/>
                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                  </Routes>
                </div>
                
              </div>
            )
          }
        </div>
      </AuthContextProvider>      
    </>
  );
}

export default App;
