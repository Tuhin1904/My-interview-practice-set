import React from 'react'
import Additems from './Additems';
import {useState} from 'react'

function App() {
    const[listT, setListT]= useState([])
    let addList = (inputT)=>{
            setListT([...listT,inputT])
    }
  return (
    <div>
        <Additems addList={addList}/>
    </div>
  )
}

export default App