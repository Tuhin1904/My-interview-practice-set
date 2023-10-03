import React from 'react'
import {useState} from 'react'

function Multipleoperations() {
    const einfo= {name:"", age:"",email:"", salary:""}
    const [info ,setinfo]=useState(einfo)

    const emp=[
        {
        id:1,
        name:"TUHIN GHOSH",
        age:23,
        email:"hsdhk",
        salary:50000
        },
        {
        id:2,
        name:"TUHIN GHOSH2",
        age:2323,
        email:"hsdhkdfef",
        salary:52000
        },
        {
        id:3,
        name:"TUHIN GHOSH",
        age:27,
        email:"hsaddfdhk",
        salary:50700
        },
        {
        id:4,
        name:"TUHIN GHOSH4",
        age:23,
        email:"hsgesdhk",
        salary:10000
        },
        {
        id:5,
        name:"TUHIN GHOS5H",
        age:243,
        email:"hsdsdfhk",
        salary:54000
        },
        {
        id:6,
        name:"TUHIN GHOSH6",
        age:123,
        email:"hssdhk",
        salary:533000
        },
    ]
    

    const handleChange=(e)=>{
        setinfo({...info, [e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
            
    }

  return (
    <div>
    <h1>This  a  page  to  add  details  of  an   employee</h1>
    <input type="text" placeholder="Add name" name="name" value={info.name} onChange={handleChange}/>
    <input type="text" placeholder="Add age" name="age" value={info.age} onChange={handleChange}/>
    <input type="text" placeholder="Add salary" name="salary" value={info.salary} onChange={handleChange}/>
    <button onClick={handleSubmit}>Add to list</button>

    <h2>Following is your employee list</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((each, i )=>{
                        return <tr key={i}>
                            <td>{each.id}</td>
                            <td>{each.name}</td>
                            <td>{each.age}</td>
                            <td>{each.email}</td>
                            <td>{each.salary}</td>
                        </tr>
                    })
                    
                }
            </tbody>
        </table>

    </div>
  )
}

export default Multipleoperations