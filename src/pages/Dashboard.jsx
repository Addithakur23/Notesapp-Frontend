import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
const Dashboard = () => {
    const token=localStorage.getItem("token")
    if(!token) return alert("User not Authorized")
    const [Title, setTitle] = useState("")
    const [Content, setContent] = useState("")
    const [Notes, setNotes] = useState([])
   const [EditingId, setEditingId] = useState("")
   const [UpdatedTitle, setUpdatedTitle] = useState("")
   const [UpdatedContent, setUpdatedContent] = useState("")
   const [Users, setUsers] = useState([])

   async function fetchNotes(){

          try{  let res1=await fetch("http://localhost:3000/api/notes",{method:"GET",headers:{
      "Content-Type": "application/json",Authorization:`Bearer ${token}`
    }})
        let notes=await res1.json()
        if(!res1.ok) {
          throw new Error("Failed to Fetch")
        }
        console.log(notes)
        setNotes(notes)
      }
      catch(error){
        console.log(error.message)
      }
    }
   useEffect(() => {
    fetchNotes()
   }, [])
   
    async function handleNotes(){
if(EditingId){
    
    let res=await fetch(`http://localhost:3000/api/notes/${EditingId}`,{method:"PUT",headers:{
      "Content-Type": "application/json",Authorization:`Bearer ${token}`
    },body:JSON.stringify({Title,Content})})
    let updatedNote=await res.json()
    setNotes((prev)=>prev.map((note)=> note._id==EditingId?updatedNote:note));
    setEditingId(null)

}
else{
    let res=await fetch("http://localhost:3000/api/notes",{method:"POST",headers:{
  "Content-Type": "application/json",Authorization:`Bearer ${token}`
},body:JSON.stringify({Title,Content})})
let data=await res.json()
if(!res.ok){
    console.log("Error : ",data)
    return
}

console.log("Note Created : ",data)

}
    setContent("")
    setTitle("")
 fetchNotes()

    }
async function handleDelete(id){
        
          let res=await fetch(`http://localhost:3000/api/notes/${id}`,{method:"DELETE",headers:{
      "Content-Type": "application/json",Authorization:`Bearer ${token}`
    }})
    let data=res.json()
    console.log(data)
    fetchNotes()
    }

async function handleEditClick(note){
  setEditingId(note._id)
  setTitle(note.Title)
  setContent(note.Content)
  }

 async function handleUsers(){
    let res1=await fetch("http://localhost:3000/api/users",{method:"GET",headers:{Authorization:`Bearer ${token}`
    }})
    if(!res1.ok){
        console.log("Failed to fetch users")
        return;
    }
    let data=await res1.json()
    console.log(data)
    setUsers(data)
 }

  return (
    <div className='text-center space-y-3 mb-16'>
        <div className='text-4xl font-semibold mt-4'>Dashboard</div>
        <span><Link to="/login" className='w-fit flex justify-end px-2 py-1 text-white font-bold bg-red-600 text-center rounded-lg'>logout</Link></span>
        <button onClick={()=>{handleUsers()}}  className='w-fit flex justify-end px-2 py-1 text-white font-bold bg-red-600 text-center rounded-lg'>Get All Users</button>
 {Users.map((items,index)=>{
        return(
            <div key={items._id} className='border border-black space-y-3 w-[60%] flex flex-col justify-center mx-auto items-center mb-4'>
                <div className='font-bold'>Name : {items.Name}</div>
                <div className='font-semibold'>Gmail : {items.Email}</div>
             
               
            </div>)})}

     <div className='font-bold'>Title : </div> <input type="text" placeholder='Enter Title' className='border-gray-300 border-2 rounded-md px-3 py-2 w-[50%] text-center' value={Title} onChange={(e)=>{setTitle(e.target.value)}} />
     <div className='font-bold'>Content : </div> <input type="text" placeholder='Enter Content' className='border-gray-300 border-2 rounded-md px-3 py-2 w-[50%] text-center' value={Content} onChange={(e)=>{setContent(e.target.value)}} />
     <div> <button onClick={()=>{handleNotes()}} className='px-2 py-1 text-white bg-blue-600 hover:bg-blue-700 text-center rounded-lg'>{EditingId ?"update Note" : "Add note"}</button></div>
      <div className='text-2xl'>Your Notes</div>
      {Notes.map((items,index)=>{
        return(
            <div key={items._id} className='border border-black space-y-3 w-[60%] flex flex-col justify-center mx-auto items-center '>
                <div className='font-bold'>Title : {items.Title}</div>
                <div className='font-semibold'>Content : {items.Content}</div>
                <div className='flex gap-3'>
                <button className='px-2 py-1 text-white font-bold bg-black text-center rounded-lg' onClick={()=>{handleDelete(items._id)}}> Delete</button>
                <button className='px-2 py-1 text-white font-bold bg-black text-center rounded-lg' onClick={()=>{handleEditClick(items)}}>Edit</button></div>
            </div>
    )

      })}
        
    </div>
  )
}

export default Dashboard
