import React from 'react'
import './note.css'

const NoteCrad = ({note,type}) => {
  
  if(note.category==type){
    return(
       <div className='note-body'>
          <span className='note-tittle'>{note.tittle}</span>
          <span className='note-desciption'>{note.description}</span>
       </div>
    )
  }


}

export default NoteCrad
