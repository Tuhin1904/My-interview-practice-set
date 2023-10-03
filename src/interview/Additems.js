import React from 'react'
import {useState} from 'react'

function Additems(props) {

    const[inputText, setInputText]= useState('')
  return (
    <div>
        <input type="text" 
            placeholder="Enter your todo"
            onChange={e=>{
                setInputText(e.target.value)
            }}
            value={inputText}
        />
        <button onClick={()=>{
            props.addList(inputText)
            setInputText("")}}>+</button>


        <div className="todo">
            {inputText}
        </div>
    </div>
  )
}

export default Additems