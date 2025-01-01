import React, { useRef } from 'react'
import './Testimonial.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import user1 from '../../images/user1.jpeg'
import user2 from '../../images/user2.jpg'
import user3 from '../../images/user3.jpg'
import user4 from '../../images/user4.jpg'

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if(tx < 0){
      tx += 20;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }



  return (
    <section className='testimonial-container' id='testimonials'>

      <h2>Testimonial <span className='h2-span'></span></h2>

      <div className="testimonial">

      <div className="preview icon" onClick={slideBackward}>
        <FaAngleLeft className='preview-i'/>
      </div> 
      <div className="next icon" onClick={slideForward}>
        <FaAngleRight className='next-i'/>
      </div>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slider-card">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>John Dory</h3>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                </div>
              </div>
              <p className='p-txt-2'> 
                I enjoyed a lot throughout the learning process in the past 4 months. 
                It's truly a great experience to join this studio as part of our yoga journey! Love it!  
              </p>
            </div>
          </li>

          <li>
            <div className="slider-card">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Rita</h3>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                </div>
              </div>
              <p className='p-txt-2'> 
                Ayush is a very good yoga teacher who taught me begginer level. 
                I really enjoyed have fun your yoga life with him. 
              </p>
            </div>
          </li>

          <li>
            <div className="slider-card">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Anita Letterback</h3>
                  <span>&#9733; &#9733; &#9733; &#9734; &#9734;</span>
                </div>
              </div>
              <p className='p-txt-2'> 
              I feel priveleged, grateful, and humbled for this experience and journey at Serinity. 
              I am honored to have learned directly, in person, from the great masters. 
              </p>
            </div>
          </li>

          <li>
            <div className="slider-card">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Ruby Bartlett</h3>
                  <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                </div>
              </div>
              <p className='p-txt-2'> 
                The classes have been absolutely fantastic, and instructors are incredibly helpful and supportive. 
              </p>
            </div>
          </li>

          <li>
            <div className="slider-card">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3 className='p-txt-2'>Amanda Hug</h3>
                  <span>&#9733; &#9733; &#9733; &#9734; &#9734;</span>
                </div>
              </div>
              <p className='p-txt-2'> 
                Every instructors is very carying and extremely good yogi at 
                true practice who keep their practice very well. 
              </p>
            </div>
          </li>

        </ul>
      </div>

      </div>
      
    </section>
  )
}

export default Testimonial
