import React from 'react'
import 'remixicon/fonts/remixicon.css'
import './show.css'

const Show = () => {
  return (
    <div className='main-container'>
      <div className='heading-txt add-heading'>your <span className='text-heighlight'>notes</span></div>
      <p className='tag-line '>see your all saved notes !</p>
      <div className='categories'>
         <span className='category-iteam'>ganral <i class="ri-home-line"></i></span>
         <span className='category-iteam'>study <i class="ri-book-open-line"></i></span>
         <span className='category-iteam'>shopping <i class="ri-shopping-bag-line"></i></span>
         <span className='category-iteam'>entertment <i class="ri-tv-line"></i></span>
         <span className='category-iteam'>trip <i class="ri-bus-line"></i></span>
      </div>
    </div>
  )
}

export default Show
