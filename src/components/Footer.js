import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/contactUs'><h2>Contact Us</h2></Link>

          </div>

        </div>
        <div className='footer-link-wrapper'>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>ALL RIGHTS RESERVED TO ADs MANAGEMENT TEAM © 2020</small>
          <div class='social-icons'>

            <a href='https://www.facebook.com' class='social-icon-link facebook' target='_blank'><i class='fab fa-facebook-f' /></a>

            <a href='https://www.instagram.com' class='social-icon-link instagram' target='_blank'><i class='fab fa-instagram' /></a>

            <a href='https://www.youtube.com' class='social-icon-link youtube' target='_blank'><i class='fab fa-youtube' /></a>

            <a href='https://www.twitter.com' class='social-icon-link twitter' target='_blank'><i class='fab fa-twitter' /></a>

            <a href='https://in.linkedin.com/' class='social-icon-link twitter' target='_blank'><i class='fab fa-linkedin' /></a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;


