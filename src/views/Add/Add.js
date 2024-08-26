import React, { useEffect, useState } from 'react'
import './add.css'
import toast from 'react-hot-toast';




const Add = () => {

  const [tittle, setTittle] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')

  // create toast messagegs...
  const notify = (Message, type) => {
    if (type === 'e') {
      toast.error(Message)
    } else if (type === 's') {
      toast.success(Message)
    }
  }


  //add notes into localStorage....
  const addNotes = () => {
    if (tittle.length <= 0 && description.length <= 0 && category === '') {
      toast.error('please fill full add fields', 'e')
    } else {
       let Notes = JSON.parse(localStorage.getItem('Notes')) || []
       Notes.push({tittle,description,category})
       localStorage.setItem('Notes',JSON.stringify(Notes))
       setTittle('')
       setcategory('')
       setdescription('')
       notify('add note successfully...','s')
    }
  }


  return (
    <div className='main-container'>
      <div className='heading-txt add-heading'>new <span className='text-heighlight'>note</span></div>
      <p className='tag-line '>What you think new , share it !</p>

      <div className='form-div'>
        <input placeholder='enter the tittle'
          className='form-inputs'
          value={tittle} onChange={(e) => {
            setTittle(e.target.value)
          }}></input>
        <select placeholder="select the categary" className='form-inputs' value={category}  onChange={(e) => {
          setcategory(e.target.value)
        }}>
          <option>select categary</option>
          <option className='select' value='ganral'>ganral</option>
          <option className='select' value='entertment'>entarment</option>
          <option className='select' value='study'>study</option>
          <option className='select' value='trip'>trip</option>
          <option className='select' value='shoping'>shopping</option>
        </select>
        <textarea className='form-inputs txt-area' placeholder='enter the description' value={description} onChange={(e) => {
          setdescription(e.target.value)
        }}></textarea>

        <div className='btns'>
          <button className='bnt' onClick={() => {
            addNotes()
          }}>Add Note</button>

          <button className='bnt btn-sec' onClick={() => {
            setTittle('')
            setcategory('')
            setdescription('')
            notify('clear successfully', 's')
          }}>clear</button>
        </div>
      </div>


    </div>
  )

}

export default Add