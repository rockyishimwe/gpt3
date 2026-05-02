import React from 'react'
import PossibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () =>(
  <div className='gpt3__possibility section__padding' id='possibility'>
    <div className='gpt3__possibility-image'>
      <img src={PossibilityImage} alt="possibility" />
    </div>
    <div className='gpt3__possibility-content'>
      <h4>Request Early Access to Get started</h4>
      <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination</h1>
      <p>From content creation to code generation, GPT-3 opens doors to applications 
we're only beginning to explore. Join thousands of developers building the 
next generation of intelligent tools that will reshape industries and create 
entirely new possibilities. </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);
export default Possibility;
