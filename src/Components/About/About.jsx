import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Gowtham_Photo.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a motivated Software Developer with a strong foundation in modern web technologies and a keen interest in building real-world applications. Through academic projects and hands-on development, I have gained practical experience in designing and developing scalable and user-friendly solutions.</p>
                <p>My passion for software development is reflected in my continuous learning mindset, problem-solving approach, and the dedication I bring to every project I work on.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>9+</h1>
            <p>Cumulative Grade Point Average</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>6+</h1>
            <p>Hackathon</p>
        </div>
      </div>
    </div>
  )
}

export default About
