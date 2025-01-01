import React from 'react'
import './Class.css'
import classimg from '../../../assets/images/pose-1.jpeg'

function Class() {
  return (
    <section id='classes' className='class-container'>
      <div className="class">
      <div className="class-text">

        <h2>How We Conduct Classes<span className='h2-span'></span></h2>

        <p className='p-txt-2'>
          Classes begin with relaxation and deep breathing followed by
           a series of asanas and fresh with pranayama and meditation.
        </p>

        
        <p className='p-txt-2'>
          If you crave for traditional year yoga offers peace of mind and 
          inner development then our studio is for you.
        </p>
 
      </div>

      <div className="class-img">
        <img src={classimg} alt="" />
      </div>

    </div>
    </section>
  )
}

export default Class
