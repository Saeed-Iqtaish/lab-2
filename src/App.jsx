import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/movies" element={<div>Movies List</div>} />
          </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
