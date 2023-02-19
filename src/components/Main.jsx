import React from 'react'
import './main.css'
import './buttons.css'

const Main = () => {
  return (
    // eslint-disable-next-line no-undef
    <div className='main'>
        <div className='main-child1'>
            <div className='text-content'>
                <h1 className='title'>CREATING SPACES FOR <span>LIFE</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Quasi fugiat commodi quis dignissimos error. <br />
                    Illo magnam laudantium rem corporis? <br />
                    Assumenda doloremque quas harum a dicta molestias et!
                </p>
            </div>
            <div className='buttons'>
                <button className='button1 button'>
                    contact now
                </button>
                <button className='button2 button'>
                    View Projects
                </button>
            </div>
        </div>
    </div>
  )
}

export default Main