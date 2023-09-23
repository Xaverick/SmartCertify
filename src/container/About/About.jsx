import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div id='about' className="about-container">
      <div className='about-content'>
        <div className="about-header">
          <h1>Hello. <br /> We’re what you’ve <br /> been looking for. <br /> Who are we? <br /> <span>We are Matterblock. </span></h1>
        </div>

        <div className='cards'>

          <div className='card'>
            <h3>01/</h3>
            <h2 className='card-header'>Our Mission</h2>
            <p className='card-content'>Our mission is to provide a platform for people to share their ideas and collaborate with others to bring their ideas to life.</p>
          </div>

          <div className='card'>
            <h3>02/</h3>
            <h2 className='card-header'>Our Mission</h2>
            <p className='card-content'>Our mission is to provide a platform for people to share their ideas and collaborate with others to bring their ideas to life.</p>
          </div>


          <div className='card'>
            <h3>03/</h3>
            <h2 className='card-header'>Our Mission</h2>
            <p className='card-content'>Our mission is to provide a platform for people to share their ideas and collaborate with others to bring their ideas to life.</p>
          </div>   

        </div>
        
      </div>
    </div>
  )
}

export default About