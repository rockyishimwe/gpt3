import React from 'react';
import Feature from '../../components/feature/Feature';

import './features.css';

const featuresData = [
  {
    title: 'Improving end-user trust instantly',
    text: "Build transparent AI systems that users can rely on. GPT-3's advanced understanding creates more accurate."
  },
  {
    title: 'Become the tended active',
    text: 'Stay ahead of the curve with AI-powered automation. Transform your workflow, reduce manual tasks.',
  },
  {
    title: 'Scalable AI infrastructure',
    text: 'Build applications that grow with your needs. GPT-3 handles millions of requests seamlessly, from prototype to enterprise scale.',
  },
  {
    title: 'Unlock creative possibilities',
    text: 'Generate content, write code, and solve problems in ways that weren\'t possible before. GPT-3 understands context and nuance,.',
  },
];

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        The Future is Now and You Just Need to Realize It. Step into 
        Future Today & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;