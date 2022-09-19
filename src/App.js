import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {FinancialNumber , ExactNumber} from './Pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FinancialNumber />}></Route>
        <Route path="/result/:value" element={<ExactNumber />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;