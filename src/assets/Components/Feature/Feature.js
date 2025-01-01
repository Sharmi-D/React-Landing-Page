import React from 'react'
import "./Feature.css"

function Feature() {
  return (
    <section name='features' className='benefit-container'>
      <h2>Here's why you'll love practicing with us: <span className='h2-span'></span></h2>
      <div className="benefits">

        <div className="benefit">
            <h3>Peaceful setting</h3>
            <p className='p-txt-2'>Our studio offers a claming and welcoming environment for your practice.</p>
        </div>

        <div className="benefit">
            <h3>Experienced Instructors</h3>
            <p className='p-txt-2'>Certified instructors provide an individual approach.</p>
        </div>

        <div className="benefit">
            <h3>Inclusive Community</h3>
            <p className='p-txt-2'>Connect with a diverse group of yoga enthusiasts who share your passion.</p>
        </div>

        <div className="benefit">
            <h3>Comprehensive Class Range</h3>
            <p className='p-txt-2'>We offer a wide array of classes tailred to all experience levels.</p>
        </div>

        <div className="benefit">
            <h3>Deep dive</h3>
            <p className='p-txt-2'>Full concentration on practice without daily distraction.</p>
        </div>

        <div className="benefit">
            <h3>Healthy Food</h3>
            <p className='p-txt-2'>A balanced vegitarian or organic menu.</p>
        </div>

    </div>
    </section>
  )
}

export default Feature
