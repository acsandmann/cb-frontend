import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import CarDetail from './CarDetail';
import Lost from './components/404Page';
import Analytics from './Analytics';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:sale_id" element={<CarDetail />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<Lost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
