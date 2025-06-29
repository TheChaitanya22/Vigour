import React from 'react'
import './Hero.css'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
     <div className='hero'>
        
        <motion.div className='hero-text'
        initial={{
            opacity:0,
            y: 80
        }}
        whileInView={{
            opacity:1,
            y: 40,
            transition:{
                duration: 1.25,
                delay: 0.25
            }
        }}
        viewport={{
            once:true,
        }}
        >
            <h1>
            Your Personalized Path to Wellness Starts Here
            </h1>
        </motion.div> 
        <motion.div className='hero-text'
        initial={{
            opacity:0,
            y: 80
        }}
        whileInView={{
            opacity:1,
            y: 40,
            transition:{
                duration: 1,
                delay: 0.25
            }
        }}
        viewport={{
            once:true,
        }}>
            <p>
            We aim to make health and wellness goals 
            more attainable,<br /> enjoyable, and sustainable for users of all fitness levels.
            </p>
            
        </motion.div>
        <motion.div className='hero-text'
        initial={{
            opacity:0,
            y: 80
        }}
        whileInView={{
            opacity:1,
            y: 40,
            transition:{
                duration: 0.75,
                delay: 0.25
            }
        }}
        viewport={{
            once:true,
        }}>
            <p>
                Let's Achieve More,  <span style={{marginLeft:'5px', fontSize:'26px', fontWeight:"500"}}>Together</span>
            </p>
            <button className='btn'>Explore More</button>
        </motion.div>
      
     </div>

  )
}

export default Hero
