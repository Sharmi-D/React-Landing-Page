import React, { useState } from 'react'
import {Link} from 'react-scroll'
import logo from '../../../assets/images/10474201.png'
import { FaTimes, FaBars } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {

    // to hide and show toogle btn 
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    // change nav background on scroll
    const [navbar, setNavbar] = useState(false);
    const changebackground = () => {
        if(window.scrollY >= 150) {
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', changebackground);


    return(
        <nav className={navbar ? 'navbar active-bg' : 'navbar'}>
            
                <div className='logo'>
                    <div className='name'>
                        ser<span><img src={logo} alt="" className='logo-icon' /></span>nity
                    </div>
                    <div className='desc'>yoga studio</div>
                </div>

                <ul className={isOpen ? "nav-menu open active" : "nav-menu"}>
                    <li><Link to='about' smooth={true} spy={true} offset ={-50} duration={500} >About</Link></li>
                    <li><Link to='classes' smooth={true} spy={true} offset={-50} duration={500}>Classes</Link></li>
                    <li><Link to='instructors' smooth={true} spy={true} offset={-50} duration={500}>Instructors</Link></li>
                    <li><Link to='features' smooth={true} spy={true} offset={-50} duration={500}>Features</Link></li>
                    <li><Link to='testimonials' smooth={true} spy={true} offset={-50} duration={500}>Testimonials</Link></li>
                    <Link className='btn contact' to='contact-us' smooth={true} offset={-50} duration={500}>Contact</Link>
                </ul>

                <div className="mobile-view" onClick={toggleMenu}>
                    {
                    isOpen? <FaTimes onClick={ () => { setIsOpen(!isOpen) }} className='times-bars' /> : 
                        <FaBars onClick={ () => { setIsOpen(!isOpen) }} className='times-bars' />
                    }
                </div>

            </nav>
        )
}

export default Navbar

