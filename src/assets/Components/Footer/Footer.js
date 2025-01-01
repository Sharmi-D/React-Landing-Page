import React from 'react'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import logo from '../../../assets/images/10474201.png'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className='footer-contant'>

        <div className="footer-top">

          <div className='logo'>
            <div className='name'>
              ser<span><img src={logo} alt="" className='logo-icon' /></span>nity
            </div>
            <p className='desc'>yoga studio</p>
          </div>

          <div className="socials">
            <h4>Follow Us</h4>

            <div className="social-links">
              <FaFacebookF className='brands icon'/>
              <FaYoutube className='brands icon'/>
              <FaTwitter className='brands icon'/>
              <FaInstagram className='brands icon'/>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className='copy-rights p-txt-2'>
            &#169;copyright2024 Serinity. All right reserved.
          </p> 
        </div> 

      </div>
    </footer>
  )
}

export default Footer

