import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './BackTotop.css'

const BackTotop = () => {

    // to go to top
    const goTotop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    // listern to scroll
    const [isVisible, setIsVisible] =useState(false);

    const listernToScroll = () => {
        const  windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(windowScroll > 250){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    };

    window.addEventListener('scroll', listernToScroll);

  return (
    <div>
        {isVisible && (
      <div className="arrow icon" onClick={goTotop}>
        <FaArrowUp  className='arrow-animation' />
      </div>
      )}
    </div>
        
  )
}

export default BackTotop
