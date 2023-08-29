import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Destinations from './Destinations';
import Experience from './Experience';
import Review from './Review';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Destinations />
        <Experience />
        <Review />
    </div>
  )
}

export default Home