import React, { useState } from 'react'
import './add.css'

const Add = () => {

  const [tittle , setTittle] = useState('')
  const [category,setcategory] =useState('')
  
  return (
    <div className='main-container'>
      <div className='heading-txt add-heading'>new <span className='text-heighlight'>note</span></div>
      <p className='tag-line '>What you think new , share it !</p>

      <div className='form-div'>
          <input placeholder='enter the tittle'
          className='form-inputs'
           value={tittle} onChange={(e)=>{
             setTittle(e.target.value)
          }}></input>
          <select placeholder="select the categary" className='form-inputs' onChange={(e)=>{
             setcategory(e.target.value)
          }}>
             <option className='select'>entarment</option>
             <option className='select'>study</option>
             <option className='select'>trip</option>
             <option className='select'>shopping</option>
          </select>
          <textarea className='form-inputs txt-area' placeholder='enter the description'></textarea>
          <div className='btns'>
            <button className='bnt '>Add Note</button>
             <button className='bnt btn-sec' onClick={()=>{
                setTittle('')
                setcategory('')
             }}>clear</button>
        </div>
      </div>


    </div>
  )

}

export default Add