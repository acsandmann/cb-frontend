import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './CarList';
import CarDetail from './CarDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:sale_id" element={<CarDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
