import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './show.css'
import NoteCrad from '../../components/Notecard/NoteCrad'

const Show = () => {
  
 const Notes = JSON.parse(localStorage.getItem('Notes')) || []
  console.log(Notes)

  const [showtype , setshowtype] = useState('ganral')

  return (
    <div className='main-container'>
      <div className='heading-txt add-heading'>your <span className='text-heighlight'>notes</span></div>
      <p className='tag-line '>see your all saved notes !</p>
      <div className='categories'>
         <span className='category-iteam' onClick={()=>setshowtype('ganral')}>ganral <i class="ri-home-line"></i></span>
         <span className='category-iteam' onClick={()=>setshowtype('study')}>study <i class="ri-book-open-line"></i></span>
         <span className='category-iteam' onClick={()=>setshowtype('shopping')}>shopping <i class="ri-shopping-bag-line"></i></span>
         <span className='category-iteam' onClick={()=>{setshowtype('entertment')}}>entertment <i class="ri-tv-line"></i></span>
         <span className='category-iteam' onClick={()=>setshowtype('trip')}>trip <i class="ri-bus-line"></i></span>
      </div>
       <div className='notes-container'>
           {Notes.map((note)=>(
              <NoteCrad note={note} type={showtype}/>
           ))}
       </div>
    </div>
  )
}

export default Show
