import React from 'react'
import './about.css'
import image from "../images/pexels-antoni-shkraba-production-8278912.jpg"

const About = () => {
  return (
    <div className='about-content'>
        <div className='about-content-prime'>
          <div className='about-title'>
            <div>
              <h1>About Us</h1>
            </div>
            <div>
              <p>Home / About Us</p>
            </div>
          </div>
            <div className='about1'>
              <div className='about-child1'>
                <img className='image-architecte' src={image} alt="architecte" />
              </div>
              <div className='about-child2'>
                <div>
                  <p className='about-company'>[ABOUT COMPANY]</p>
                  <h2 className='title2-about'>We Are Very Creatives</h2>
                </div>
                <p className='about-paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi fugiat commodi quis dignissimos error.
                    Illo magnam laudantium rem corporis?
                    Assumenda doloremque quas harum a dicta molestias et!
                    Quasi fugiat commodi quis dignissimos error.
                    Quasi fugiat commodi quis dignissimos error.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                
                <button className='learn-more'>learn more</button>
                
              </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default About