import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './component/Header' // Updated the file name to 'header' with lowercase 'h'
import Home from './pages/Home'
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='logo2'>
          Cryptocurreny {">>"} <span>Bitcoin</span>
        </div>
        <div className="bg-#eff2f5">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
