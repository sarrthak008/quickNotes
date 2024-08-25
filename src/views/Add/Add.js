import React, { useEffect, useState } from 'react'
import './add.css'
import toast, { Toaster } from 'react-hot-toast';




const Add = () => {

  const [tittle , setTittle] = useState('')
  const [category,setcategory] =useState('ganral')
  const [description ,setdescription] = useState('')  
   
  const [notes , setnotes]  = useState([])
 
  useEffect(()=>{
     
  localStorage.setItem('allNotes',JSON.stringify(notes))
  },[notes])


  // create toast messagegs...
const notify = (Message,type) =>{
    if(type=='e'){
      toast.error(Message)
    }else if(type == 's'){
      toast.success(Message)
    }
}

// set localStorage
const saveNotes=()=>{
  setnotes([{tittle,category,description},...notes])
}


//add notes into localStorage....
 const addNotes=()=>{
    if(tittle.length <=0 && description.length <=0 && category.length==0 ){
      toast.error('please fill full add fields','e')
    }else{
       saveNotes()
       setTittle('')
       setcategory('')
       setdescription('')
      console.log(notes)
    }
 }


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
             <option className='select'>ganral</option>
             <option className='select'>entarment</option>
             <option className='select'>study</option>
             <option className='select'>trip</option>
             <option className='select'>shopping</option>
          </select>
          <textarea className='form-inputs txt-area' placeholder='enter the description' value={description}  onChange={(e)=>{
             setdescription(e.target.value)
          }}></textarea>
         
          <div className='btns'>
            <button className='bnt' onClick={()=>{
              addNotes()
            }}>Add Note</button>

             <button className='bnt btn-sec' onClick={()=>{
                setTittle('')
                setcategory('')
                setdescription('')
                notify('clear successfully','s')
             }}>clear</button>
        </div>
      </div>


    </div>
  )

}

export default Add