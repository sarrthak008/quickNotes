import React from 'react'
import './pages.css'
import { Link } from 'react-router-dom'

const PagesLinkIcon = () => {
  return (
    <div className='icon-div'>
        <Link  className='link' to='/add'><span className='page-icons'><i class="ri-sticky-note-add-line"></i></span></Link>
        <Link  className='link' to='/show'><span className='page-icons'><i class="ri-sticky-note-line"></i></span></Link>
    </div>
  )
}

export default PagesLinkIcon
