import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3 is a state-of-the-art language model developed by OpenAI that can 
generate human-like text, answer questions, write code, and understand 
context. With 175 billion parameters, it represents a breakthrough in 
artificial intelligence and natural language processing." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Build conversational AI that understands context and responds naturally. 
Create customer support bots, virtual assistants, or interactive 
experiences that feel human." />
      <Feature title="Knowledgebase" text="Transform your data into an intelligent knowledge system. GPT-3 can 
search, summarize, and extract insights from vast amounts of information 
instantly." />
      <Feature title="Education" text="Power personalized learning experiences with AI tutors that adapt to 
individual needs. Generate practice problems, explanations, and 
interactive lessons automatically." />
    </div>
  </div>
);

export default WhatGPT3;
