import React from 'react';
import './HeroSection.css';
import './Button.css';
import Navbars from './Navbars/LoginNavbar';
import { Link } from 'react-router-dom';


export default function LoginInitial() {

  return (

    <div className='LoginAs'>
      <Navbars/>
      <div className='logintag'>
        <h1>Login As</h1>
      </div>
      
      <div>

        <Link to='/login' className='btn-mobile'>

          <button class="buttonCust" >Customer</button>
        </Link>
        <Link to='/staff-login' className='btn-mobile'>

          <button class="buttonStaf" variant="outline-primary">

            Staff</button>
        </Link>


      </div>

    </div>

  );



}