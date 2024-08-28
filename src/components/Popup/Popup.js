import React from 'react'
import './popup.css'

const Popup = ({status,index,isComplete}) => {

    const deleteNote= (i) =>{
        const Notes = JSON.parse(localStorage.getItem('Notes'))
         Notes.splice(i,1)
         localStorage.setItem('Notes',JSON.stringify(Notes))
         window.location.reload()
    }
    
  return (
    <div className='popup-body'>
         <button className='btn' onClick={()=>{isComplete(true)}}>mark as complete <i class="ri-check-double-line"></i></button>
         <button className='btn delete-btn' onClick={()=>{deleteNote(index)}}>delete note <i class="ri-delete-bin-6-line"></i></button>
         <button className='btn' onClick={()=>{status(false)}}>close menu <i class="ri-close-fill"></i></button>
    </div>
  )
}

export default Popup
