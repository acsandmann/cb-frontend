import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import CarDetail from './CarDetail';
import Lost from './components/404Page';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:sale_id" element={<CarDetail />} />
          <Route path="*" element={<Lost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
