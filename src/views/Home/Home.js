import React from 'react'
import './home.css'
import noteimg from './note.png'

const Home = () => {
  return (
    <div className='home-container'>
          <div className='heading'>
            <span className='heading-txt'>Noteit !</span>
            <img src={noteimg} className='heading-img'></img>
            <div className='tag-line'>note your day...</div>
          </div>

    </div>
  )
}

export default Home
