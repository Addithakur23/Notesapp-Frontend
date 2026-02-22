import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link,Outlet } from 'react-router-dom'

function App() { 
  return (
    <>
     <nav className='flex justify-around  py-3 px-6 bg-purple-600 text-white font-bold sticky top-0'>
      <div>NotesApp</div>
      <div className='flex gap-3'>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login </Link></div>
     </nav>
     <div className='text-5xl text-center mt-44 font-semibold'>NotesApp</div>
     <div className='text-2xl text-center mt-4'>Where you can manage and save your notes</div>
     
     <Outlet/>
    </>
  )
}

export default App
