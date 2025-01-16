import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
     <div className='hero'>
        <div className='hero-text'>
            <h1>
            Your Personalized Path to Wellness Starts Here
            </h1>
        </div> 
        <div className='hero-text'>
            <p>
            We aim to make health and wellness goals 
            more attainable, enjoyable, and sustainable for users of all fitness levels.
            </p>
            
        </div>
        <div className='hero-text'>
            <p>
                Let's Achieve More,  <span style={{marginLeft:'5px', fontSize:'26px', fontWeight:"500"}}>Together</span>
            </p>
            <button className='btn'>Explore More</button>
        </div>
      
     </div>

  )
}

export default Hero
