import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import CarDetail from './CarDetail';
import Lost from './components/404Page';
import Analytics from './Analytics';
import BrandList from './BrandList';
import Predictions from './Predictions';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
        <Header />
        <div className="bg-main-body flex flex-col min-h-screen m-0 z-40">
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/brands" element={<BrandList />} />
            <Route path="/predict" element={<Predictions />} />
            <Route path="/car/:sale_id" element={<CarDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<Lost />} />
          </Routes>
        </div>
        <Footer />
    </Router >
  );
}

export default App;
