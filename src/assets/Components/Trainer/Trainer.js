import React from 'react'
import "./Trainer.css"
import instructor1 from '../../../assets/images/instructor-1.jpg'
import instructor2 from '../../../assets/images/instructor-2.jpg'
import instructor3 from '../../../assets/images/instructor-3.jpg'
import instructor4 from '../../../assets/images/instructor-4.jpeg'
import instructor5 from '../../../assets/images/instructor-5.jpg'
import instructor6 from '../../../assets/images/instructor-6.jpg'

const Trainer = () => {
    return(
        <section name='instructors' className='trainer-container'>

            <h2>Our Amazing Instructros<span className='h2-span'></span></h2>

            <p className='sub-title p-txt-1'>
                We're a team of experienced yoga instructors dedicated to helping
                 you feel stronger, calmer, and more balanced.
            </p>
            
            <div className="trainer-cards">
                <div className="card">
                    <img src={instructor1} alt="" />
                    <div className="info">
                        <h2>Linda</h2>
                        <p>6 Years of Experience</p>
                        <button className='more-btn btn'>Know more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={instructor2} alt="" />
                    <div className="info">
                        <h2>Ayush</h2>
                        <p>8 Years of Experience</p>
                        <button className='more-btn btn'>Know more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={instructor3} alt="" />
                    <div className="info">
                        <h2>Soniya Batiya</h2>
                        <p>3 Years of Experience</p>
                        <button className='more-btn btn'>Know more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={instructor4} alt="" />
                    <div className="info">
                        <h2>Aadvik</h2>
                        <p>12 Years of Experience</p>
                        <button className='more-btn btn'>Know more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={instructor5} alt="" />
                    <div className="info">
                        <h2>Niharica</h2>
                        <p>4 Years of Experience</p>
                        <button className='more-btn btn'>Know more</button>
                    </div>
                </div>
                <div className="card">
                    <img src={instructor6} alt="" />
                    <div className="info">
                        <h2>Sam Newman</h2>
                        <p>3 Years of Experience</p>
                        <button className='more-btn btn'>Know more</button>
                    </div>
                </div>
            </div>

        </section>
          )
}

export default Trainer