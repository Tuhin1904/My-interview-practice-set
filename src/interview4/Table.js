import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function Table() {
  const data={fname:"", lname:"",age:""}
    const [udata, setData]= useState([])
    const [editId,seteditID]= useState(-1)
    const [updatedata,setupdatedata]=useState(data)
    
    useEffect(()=>{
           axios.get('http://localhost:3000/users')
           .then((res)=> setData(res.data))
           .catch((err)=> console.log(err))
    },[])
      
    const deleteid=(idd)=>{
      
          axios.delete('http://localhost:3000/users/'+idd)
          .then((res)=>console.log("deleted",res))
          // .then((res)=>location.reload())
          
    }
    const handleUpdateValue=(e)=>{
      setupdatedata({...updatedata,[e.target.name]:e.target.value})
      console.log(updatedata)
    }

    const handleUpdate=(idd)=>{
        seteditID(idd)
    }

    const submitChange=(id)=>{
      axios.put('http://localhost:3000/users/'+id,{...updatedata},)
      .then((res)=>console.log(res))
      .catch((err)=> console.log(err))
    }
  return (
    
    <div>
        
        <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr> 
        </thead>
          <tbody>
          {
            udata.map((user,index)=>(
              user.id===editId? 
              <>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><input type="text" value={updatedata.fname} name="fname" onChange={handleUpdateValue}/></td>
                  <td><input type="text" value={updatedata.lname} name="lname" onChange={handleUpdateValue}/></td>
                  <td><input type="text" value={updatedata.age} name="age" onChange={handleUpdateValue}/></td>
                  <td><button onClick={()=>submitChange(user.id)}>Update</button></td>
                </tr>
              </>:
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
                <td>
                <button onClick={()=>handleUpdate(user.id)}>Edit Values</button>
                <br/>
                <button onClick={()=>deleteid(user.id)}>Delete</button></td>
                </tr>
            ))
          }
          </tbody>
        </table>
    </div>
  )
}

export default Table