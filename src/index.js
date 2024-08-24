import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Add from './views/Add/Add';
import Show from './views/Show/Show'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add' element={<Add/>}/>
       <Route path='/show' element={<Show/>}/>
   </Routes>
  </BrowserRouter>
);

