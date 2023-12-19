import React from 'react';
import './BlogStyles.css';
import './ResponsiveBlog.css';
import { PostBlog } from './PostBlog/PostBlog';

import BlogPic1 from '../../images/cards/cards-01.png';
import BlogPic2 from '../../images/cards/cards-01.png';
import BlogPic3 from '../../images/cards/cards-01.png';
import ProfilePic from '../../images/cards/cards-01.png';

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo mb-10">
          <h2 className="text-[#64748b] xl:text-6xl md:text-5xl text-4xl font-extrabold font-satoshi">
            Read Our Blog
          </h2>
        </div>

        <div className="postsWrapper">
          {/* Blog Post 1: New Tools */}
          <PostBlog
            src="https://plus.unsplash.com/premium_photo-1678344155293-1d79eb59cb4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D"
            alt="New Tools"
            title="Exploring the Latest Tools in Agriculture"
            profile={ProfilePic}
            name="Ashutosh"
            author="Ashutosh"
          />

          {/* Blog Post 2: Crop Growth */}
          <PostBlog
            src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crop Growth"
            title="Understanding the Growth Phases of Crops"
            profile={ProfilePic}
            name="Hemant"
            author="Hemant"
          />

          {/* Blog Post 3: Fertilizer Insights */}
          <PostBlog
            src="https://images.unsplash.com/photo-1559884743-74a57598c6c7?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fertilizer Insights"
            title="Navigating Through Fertilizers: A Comprehensive Guide"
            profile={ProfilePic}
            name="Amitesh"
            author="Amitesh"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
