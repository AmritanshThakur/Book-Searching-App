import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        {/* <div className='section-title'>
          <h1>About</h1>
        </div> */}

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Books have been a source of knowledge, entertainment, and inspiration for centuries. Whether fiction or non-fiction, books have the power to transport us to different worlds, broaden our perspectives, and enrich our lives. From ancient texts to modern bestsellers, books have the ability to teach us about history, science, culture, and human nature. They can make us laugh, cry, and think deeply about the world around us.</p>
            <p className='fs-17'>All a world where technology has become ubiquitous, books remain a vital part of our lives. They offer a respite from the constant barrage of screens and notifications, allowing us to unplug and immerse ourselves in stories and ideas. Books can challenge our assumptions, expand our understanding of the world, and provide us with a sense of connection to something larger than ourselves.</p>
            <p className='fs-17'>Whether you're a seasoned bookworm or just starting to explore the world of literature, there is always something new to discover within the pages of a book. So grab a cup of tea, find a cozy spot to curl up, and let yourself get lost in the magic of a good book.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
