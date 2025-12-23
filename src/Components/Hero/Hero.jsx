import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_photo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from "../../assets/Gowtham_Resume.pdf";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Gowtham D V,</span> a software developer.</h1>
      <p>I am a software developer with hands-on experience in designing and developing scalable, user-friendly web applications using modern technologies.
</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link">My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
