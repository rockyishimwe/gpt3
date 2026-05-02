import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Harness the power of OpenAI's GPT-3 to create intelligent applications, 
automate workflows, and unlock new possibilities. Build chatbots, content 
generators, and AI-powered tools that transform how we work and create.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type='button'><a href = "https://openai.com/index/gphttps://chatgpt.com/auth/login?openaicom_referred=truet-3-apps/">Get Started</a></button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='people'/>
        <p>1,600 developers joined in the last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
       <img src={ai} alt='AI' />
    </div>
  </div>
);

export default Header;
