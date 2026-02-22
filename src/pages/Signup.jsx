import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { Link,Outlet } from 'react-router-dom'
const Signup = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    let navigate=useNavigate()
      async function handleSignups(){
 let res= await fetch("http://localhost:3000/api/Signup",{method:"POST",headers:{
      "Content-Type": "application/json"
    },body:JSON.stringify({Name,Email,Password})})
    
    if(res.ok){
      setEmail("")
      setName("")
      setPassword("")
      alert("Signup successful")
      navigate("/login")
    }
  }
  return (
    <form >
       <div className="container flex flex-col  justify-center  mx-auto mt-28 w-[27%] py-4 ">
      <div className="inputs space-y-2 border border-black p-6 rounded-lg">

      <div className='text-3xl font-bold text-center'>Sign Up</div>
      <div className='font-semibold text-lg'>Name</div>
       <div><input type="text" placeholder='Enter Name' value={Name} onChange={(e)=>{setName(e.target.value)}} className='border-gray-300 border-2 rounded-md px-3 w-full py-2'/></div>
        <div className='font-semibold text-lg'>Email</div>
         <div><input type="email" placeholder='Enter Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} className='border-gray-300 border-2 rounded-md px-3 py-2 w-full'/></div>
         <div className='font-semibold text-lg'>Password</div>
         <div><input type="password" placeholder= 'Enter Password' value={Password} onChange={(e)=>{setPassword(e.target.value)} }  className='border-gray-300 border-2 rounded-md px-3 py-2 mb-3  w-full'/></div>
      <button id="add" type="button" onClick={()=>{handleSignups()}}  className="bg-blue-500 w-full rounded-lg py-2 px-3 text-white font-bold text-lg hover:bg-blue-600">Sign Up</button>
    
      <div className='text-center'> Already Have An Account? <Link className='text-blue-600 cursor-pointer' to="/login">Login</Link> </div>
      
      </div>
     </div>
    
    </form>
  )
}

export default Signup
