import React from 'react'
import './Programs.css'
import { anticipate, motion } from 'framer-motion'
import { Button } from '../Button/Button'

function Programs() {
    return (
        <motion.div className='programs' id="program"
        initial={{
            opacity: 0,
            y: 200,
            scale: 0.9
        }}
        whileInView={{
            opacity:1,
            scale: 1,
            y:30,
            transition: {
                duration: 1,
            }
        }}
        viewport={{
            once:true,
            amount: 0.1
        }}
        >
            <div className='image'>
                <img src="https://imgv2-2-f.scribdassets.com/img/document/683734409/original/207cf312ff/1?v=1" />
            </div>
            <div className='info'>
                <div className='info-text'>
                    <h1>
                        TRAINING PROGRAMS
                    </h1>
                </div>
                <div className='info-text'>
                    <p>
                        World-Class training programs backed by 
                        <span style={{marginLeft:'5px', fontSize:'22px', fontWeight:"500"}}>Science-based</span> evidence
                    </p>
                </div>
                <div>
                    <Button label={"Learn More"} />
                </div>

                <div className='info-text'>
                    <h1>
                        NUTRITION PLANS
                    </h1>
                </div>
                <div className='info-text'>
                    <p>
                    Fuel your fitness goals with a nutrition plan 
                    designed <span style={{marginLeft:'5px', fontSize:'22px', fontWeight:"500"}}>
                    Just For You</span> at Vigour!
                    </p>
                </div>
                <div>
                <Button label={"Learn More"} />
                </div>

            </div>
        </motion.div>
    )
}

export default Programs
