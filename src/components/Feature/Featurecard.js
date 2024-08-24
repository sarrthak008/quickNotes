import React from 'react'
import './feature.css'

const Featurecard = ({feature,imgurl}) => {
  return (
    <div className='feature'>
       <img src={imgurl} className='feature-img'></img>
       <h3 className='feature-txt'>{feature}</h3>
    </div>
  )
}

export default Featurecard
