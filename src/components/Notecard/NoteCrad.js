import React, { useState } from 'react'
import './note.css'
import studyImg from './study.png'
import Tvimg from './tv.png'
import triptImg from './trip.png'
import GanaralImg from './ganral.png'
import shoppingImg from './shoppin.png'
import Popup from '../Popup/Popup'

const NoteCrad = ({note,index}) => {
  const  getimg = (type) =>{
     if(type=='study'){
      return studyImg
     }else if(type=='entertment'){
      return Tvimg
     }else if(type=='ganral'){
      return GanaralImg
     }else if(type== 'trip'){
      return triptImg
     }else if(type == 'shoping'){
      return shoppingImg
     }
  
   }

   
   const [popupStatus,setpopupStatus] =useState(false)

    return(
     
       <div className='note-body'>
          <img src={getimg(note.category)} className='note-img'></img>
          <div className='overlay'>
               <span className='note-tittle'>{note.tittle}</span><br></br>
               <span className='note-desciption'>{note.description}</span>
               <div className='remove-note' onClick={()=>setpopupStatus(true)}><i class="ri-more-fill"></i></div>
               {popupStatus ? <Popup status={setpopupStatus} index={index}/> : null}
          </div>
       </div>
    )
  }


export default NoteCrad 
