import React from 'react'
import "./Hero.css"
import image from '../../../assets/images/bg.jpg'

const Hero = () => {
  return (
    <section className='text-container'id='hero'>

        <img src={image} alt='' className='slider-img' />

        <div className="slogan">
            <p className='p-txt-1'>Breathe, Relax, and be Still.</p>

            <div className='txt'>
              <h1>Yoga is the journey of the self</h1> 
              <h1>Through the self</h1>
              <h1> To the self </h1>
            </div>

            <button className='btn'>Get Started</button>
        </div>

    </section>
  )
}

export default Hero
