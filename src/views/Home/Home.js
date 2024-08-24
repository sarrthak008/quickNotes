import React from 'react'
import './home.css'
import noteimg from './note.png'
import { Link } from 'react-router-dom'
import Featurecard from '../../components/Feature/Featurecard'
import safeImg from './security.png'
import fast from './speed.png'
import easy from './easy.png'

const Home = () => {
  return (
    <div className='home-container'>
          <div className='heading'>
            <span className='heading-txt'>Noteit !</span>
            <img src={noteimg} className='heading-img'></img>
            <div className='tag-line'>note your day...</div>
          </div>
        <div className='btns-container'>
          <Link to='/add'><button className='bnt'>Add Note</button></Link>
          <Link to='/show'><button className='bnt btn-sec'>Show Notes</button></Link>
        </div>
        <div className='feature-cards-container'>
           <Featurecard feature={'Very safe'} imgurl={safeImg}/>
           <Featurecard feature={'Light speed'} imgurl={fast}/>
           <Featurecard feature={'Easy to use'} imgurl={easy}/>
        </div>
    </div>
  )
}

export default Home
