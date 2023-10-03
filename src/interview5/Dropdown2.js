import {useState} from 'react';

import React from 'react'

function Dropdown2() {
    const[pvalue, setpvalue]=useState("")
    const [skills, setSKills]= useState([])

    const userinfo = [
        {
          id: 1,
          name: 'Tuhin',
          value: "TG",
          favcities: ['Kolkata', 'Krishnanagar', 'Howrah'],
          skills: ['Computer User', 'Coding', 'Photo']
        },
        {
          id: 2,
          name: 'Pritam',
          value: "PG",
          favcities: ['Mumbai', 'Majhdia', 'Howrah'],
          skills: ['Computer User', 'Coding', 'Multiskill']
        },
        {
          id: 3,
          name: 'Ishan',
          value: "IS",
          favcities: ['Barasat', 'Siliguri', 'Jalpaiguri'],
          skills: ['Computer User', 'Coding', 'Php']
        },
        {
          id: 4,
          name: 'Ankush',
          value: "AN",
          favcities: ['Kanchrapara', 'Bidhannagar', 'Dhubulia'],
          skills: ['Computer User', 'Coding', 'UPSC']
        }
      ];
      const handlepersonChange=(e)=>{
        setpvalue(e.target.value)

        const findP=userinfo.find((user)=> user.value===pvalue)
        console.log(findP)
    }
    console.log(pvalue)
    // const findA = userinfo.find((user)=> user.id === 2)
    // console.log(findA)

  return (
    <>
        <select style={{margin:"5rem"}} value={pvalue} onChange={handlepersonChange}>
        <option value="">Select a person</option>
        {
            
            userinfo.map((user,i)=>{ 
               return <option value={user.value}>{user.name}</option>
        })
        }
        </select>
        <select name="" id="">
            <option value="">

            </option>
        </select>

    </>
  )
}

export default Dropdown2