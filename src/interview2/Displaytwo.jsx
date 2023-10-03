import React from 'react'
import axios from 'axios'
import {useState} from 'react'

function Displaytwo() {
    const data={fname:"", lname:""}
    const [inputData, setInputData]=useState(data)

    const handleData =(e)=>{
            setInputData({...inputData, [e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
            e.preventDefault()
            axios.post("https://jsonplaceholder.typicode.com/users",inputData)
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }
    const onUpdate=(e)=>{
        e.preventDefault()
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((res)=> console.log(res)).catch(err => console.log(err))
    }
  return (
    <div>
        <span>First Name</span>
        <input type="text" name='fname' onChange={handleData}/>
        <span>Last Name</span>
        <input type="text" name='lname' onChange={handleData}/>
        <br/>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onUpdate}>Update</button>
    </div>
  )
}

export default Displaytwo