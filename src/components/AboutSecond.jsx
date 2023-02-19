import React from 'react'
import {ImHome} from 'react-icons/im'
import {IoMapOutline} from 'react-icons/io5'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {BsPersonCheck} from 'react-icons/bs'
import './about.css'

const AboutSecond = () => {
  return (
    <div className='about-second-content'>
        <div className='about-second-child'>
          <div className='about-second-brother'>
            <div>
              <ImHome className='icon'/>
            </div>
            <div className='infos'>
              <h1>10+</h1>
              <p>Home designed</p>
            </div>
          </div>
          <div className='about-second-brother'>
            <div>
              <IoMapOutline className='icon'/>
            </div>
            <div className='infos'>
              <h1>124+</h1>
              <p>Projects Planning</p>
            </div>
          </div>
          <div className='about-second-brother'>
            <div>
              <MdOutlineBedroomParent className='icon'/>
            </div>
            <div className='infos'>
              <h1>31+</h1>
              <p>Rome created</p>
            </div>
          </div>
          <div className='about-second-brother'>
            <div>
              <BsPersonCheck className='icon'/>
            </div>
            <div className='infos'>
              <h1>315+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutSecond