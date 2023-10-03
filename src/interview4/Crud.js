import React from 'react';
import './crud.css';
import Table from './Table';
import {useState} from 'react'
import axios from 'axios'

function Crud() {

  const data={fname:"",lname:"",age:""}
  const [inpData,setInpData]=useState(data)

  const handleData=(e)=>{
      setInpData({...inpData,[e.target.name]:e.target.value})
  }
  const handleSubmit =(e)=>{
    console.log('submit',inpData)
    // e.preventDefault()
    axios.post('http://localhost:3000/users',{
        ...inpData
      },
     
      )
    .then((res)=>console.log("gg",res))
    .catch((err)=> console.log(err))
  }

  return (
    <>
    <div className='crud'>
      <h1>Crud operations</h1>
      
        <span>First Name</span>
        <input type="text" value={inpData.fname} name='fname' onChange={handleData}/>
        <span>Last Name</span>
        <input type="text" value={inpData.lname} name='lname' onChange={handleData}/>
        <span>Age</span>
        <input type="text" value={inpData.age} name='age' onChange={handleData}/>
        <br/>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    

    </div>    
    <Table/>
    </>
  );
}

export default Crud;
