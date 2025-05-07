import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<div>Home Page Placeholder</div>} />
            <Route path="/movies" element={<div>Movies Page Placeholder</div>} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
