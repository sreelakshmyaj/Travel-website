import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
    </div>
  )
}

export default Home