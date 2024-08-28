import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './show.css'
import NoteCrad from '../../components/Notecard/NoteCrad'

const Show = () => {
  
 const Notes = JSON.parse(localStorage.getItem('Notes')) || []
  console.log(Notes)
 
  return (
    <div className='main-container'>
      <div className='heading-txt add-heading'>your <span className='text-heighlight'>notes</span></div>
      <p className='tag-line '>see your all saved notes !</p>
       <div className='notes-container'>
           {Notes.map((note,index)=>(
              <NoteCrad note={note} index={index}/>
           ))}
       </div>
    </div>
  )
}

export default Show
