import React from 'react'
import './About.css'
import aboutimg from '../../../assets/images/pose-2.jpeg'

function About() {
  return (
    <section id='about' className='about-us'>
      <div className="about">

      <div className="about-img">
        <img src={aboutimg} alt="" />
      </div>

      <div className="about-text">
        <h2>About Us<span className='h2-span'></span></h2>

        <p className='p-txt-2'>
          A sanctuary to deepen the body, mind and soul connection in the modern world.
        </p>

        <h5>
          We Serinity Yoga Studio Welcomes You!
        </h5>
        
        <p className='p-txt-2'>
          Practice with us authenteic first hand yoga in filled peaceful urban oasis 
          with our internationally certified yoga instructors.
        </p>

        <p className='p-txt-2'>
          We offer a range of regular yoga classes to suit all levels from beginner to advanced.
        </p>
      </div>

    </div>
    </section>
  )
}

export default About
