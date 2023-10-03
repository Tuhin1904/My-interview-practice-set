import React from 'react'
import {useState} from 'react'

function Todolist() {
        const [inpValue, setInpValue]= useState("")
        const[todolist, setTodolist]= useState([])
       
        const handleSubmit = ()=>{
            setTodolist([...todolist,inpValue])
            setInpValue("")
        }
        const removeTodo=(i)=>{
                const updatelist= todolist.filter((todo,index)=>{
                    return i!==index;
                })
                setTodolist(updatelist)
        }
        const deleteAll=()=>{
            setTodolist([])
        }
  return (
    <>
        <h1>Add your TodoList here</h1>
        <div>
            <input type="text" placeholder="Enter your todo activity" value={inpValue} onChange={(e)=> setInpValue(e.target.value)}/>
            <button onClick={handleSubmit}>ADD</button>
            <br />
            <h2>Following tasks are to be done:</h2>
            <div>
                {
                    todolist.map((todo, i )=>{
                        return <p key={i}>{todo} <button onClick={()=>removeTodo(i)}>X</button></p>
                    })
                }
            </div>
            <button onClick={deleteAll}>REMOVE ALL</button>

        </div>
    </>
  )
}

export default Todolist