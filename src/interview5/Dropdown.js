// import React from 'react'
// import {useState} from 'react'

// function Dropdown() {
//     const[person, setPerson]= useState("")
//     console.log(person)
//     const userinfo=[
//         {   id:1,
//             name:'Tuhin',
//             value:"TG" ,
//             favcities:['Kolkata', 'Krishnanagar', 'Howrah'],
//             skills:['Computer User','Coding','Photo']
//         },
//         {   id:2,
//             name:'Pritam',
//             value:"PG" ,
//             favcities:['Mumbai', 'Majhdia', 'Howrah'],
//             skills:['Computer User','Coding','Multiskill']
//         },
//         {   id:3,
//             name:'Ishan',
//             value:"IS" ,
//             favcities:['Barasat', 'Siliguri', 'Jalpaiguri'],
//             skills:['Computer User','Coding','Php']
//         } ,
//         {   id:4,
//             name:'Ankush',
//             value:"AN" ,
//             favcities:['Kanchrapara', 'Bidhannagar', 'Dhubulia'],
//             skills:['Computer User','Coding','UPSC']
//         } 
       
//     ]

//   return (
//     <div className="dropDown" >
//        <nav style={{backgroundColor:"orange",height:"6rem"}}> 
//        <select style={{marginLeft:"5rem",marginTop:"2rem", padding:".5rem", borderRadius:".5rem"}}
//        onChange={(e)=>setPerson(e.target.value)}>
//             {
//                 userinfo.map((user,id)=>(
//                         <option key ={id} value={user.id} style={{padding:".5rem"}}>
//                             {user.name}
//                         </option>
//                 ))
//             }
//         </select>
//         </nav>
//     </div>
//   )
// }

// export default Dropdown
import React, { useState } from 'react';

function Dropdown() {
  const [selectedPersonId, setSelectedPersonId] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

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

  const handlePersonChange = (e) => {
    const selectedId = e.target.value;
    setSelectedPersonId(selectedId);

    // Find the selected person's favorite cities
    const selectedPerson = userinfo.find((user) => user.id === parseInt(selectedId));
    if (selectedPerson) {
      setSelectedCities(selectedPerson.favcities);
    } else {
      setSelectedCities([]);
    }
  };

  return (
    <div className="dropDown">
      <nav style={{ backgroundColor: "orange", height: "6rem" }}>
        <select
          style={{ marginLeft: "5rem", marginTop: "2rem", padding: ".5rem", borderRadius: ".5rem" }}
          onChange={handlePersonChange}
          value={selectedPersonId}
        >
          <option value="">Select a person</option>
          {userinfo.map((user) => (
            <option key={user.id} value={user.id} style={{ padding: ".5rem" }}>
              {user.name}
            </option>
          ))}
        </select>
      </nav>

      {/* Nested dropdown for favorite cities */}
      {selectedPersonId && (
        <div>
          <label style={{ marginLeft: "5rem", marginTop: "1rem", display: "block" }}>Favorite Cities:</label>
          <select
            style={{ marginLeft: "5rem", padding: ".5rem", borderRadius: ".5rem" }}
          >
            {selectedCities.map((city, index) => (
              <option key={index} value={city} style={{ padding: ".5rem" }}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
