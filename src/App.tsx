import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderNavigation from './components/layouts/HeaderNavigation';
import Home from './pages/Home';
import Footer from './components/layouts/Footer';
function App() {
  return (
    <BrowserRouter>
      <HeaderNavigation />
      <Routes>
        {/* Home Start Section */}
        <Route path="/SEA_Salon" element={<Home />} />
        {/* Home End Section */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
