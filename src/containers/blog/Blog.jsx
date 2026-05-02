import React from 'react'
import './blog.css';
import {Article} from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './imports';


const Blog = () => {
  return (
   <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog01} date="Sep 26,2021" text="GPT-3 and the Future of AI: Exploring Natural Language Processing" />
      </div>
      <div className='gpt3__blog-container_groupB'>
        
        <Article imgUrl={blog02} date='Sep 26,2021' text="Building Production-Ready Apps with OpenAI: A Developer's Guide"/>
        <Article imgUrl={blog03} date='Sep 26,2021' text="From Prototype to Product: Scaling GPT-3 Applications Effectively"/>
        <Article imgUrl={blog04} date='Sep 26,2021' text="GPT-3 Use Cases: Beyond Chatbots and Content Generation"/>
        <Article imgUrl={blog05} date='Sep 26,2021' text="Understanding GPT-3 Limitations: What It Can and Cannot Do"/>

      </div>
    </div>
   </div>
  )
}

export default Blog
