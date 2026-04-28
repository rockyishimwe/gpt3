import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import blog1 from '../../assets/blog01.png';

const Blog = () => {
  return (
   <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>A lot is happening,<br /> We are blogging about it.</h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog1} date="Sep 26,2021" text="GPT-3 and Open AI is the future.Let us Explore how it is?" />
      </div>
    </div>
   </div>
  )
}

export default Blog
