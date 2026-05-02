import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () =>(
  <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>
        Do you want to step in to the future before others
      </h1>
    </div>
    <div className='gpt3__footer-btn'>
      <p><a href='https://chatgpt.com/auth/login?openaicom_referred=true'>Request Early Access</a></p>
    </div>
    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt="logo" />
        <p>Kigali . Rwanda ,<br />All Rights Reserved</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>About</p>
        <p>Social Media</p>
        <p>Features</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get in touch</h4>
        <p> kigali . Rwanda</p>
        <p>+250 791 039 241</p>
        <p>rockyishimwe9@gmail.com</p>
      </div>
    </div>
    <div className='gpt3__footer-copyright'>
      <p>@2026 GPT-3.All Rights reserved.</p>
    </div>
  </div>
);
export default Footer;