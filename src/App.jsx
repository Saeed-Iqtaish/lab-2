import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path='/movies/:id' element={<MovieDetails/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
