import React from 'react'
import bgVideo from '../Assets/video1.mp4';

const Hero = () => {
  return (
    <div className='hero-container'>
        <video src={bgVideo} autoPlay loop muted />
        <div className='hero-txt'>
            <h1>Let's Travel The World</h1>
            <p>Explore the captivating destinations around the world with our curated travel experiences.</p>
            <div className='hero-btns'>
                <button className='primary-btn'>Get Started</button>
                <button className='primary-outline-btn'>Get Demo</button>
            </div>
        </div>
    </div>
  )
}

export default Hero