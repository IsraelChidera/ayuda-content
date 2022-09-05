import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <div className="App bg-white">
      < Navbar />

      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/plans-pricing" element={<PricingPage/>}/>
        <Route path="/plans-pricing/payment" element={<Checkout/>}/>
      </Routes>

      < Footer />
    </div>
  );
}

export default App;
