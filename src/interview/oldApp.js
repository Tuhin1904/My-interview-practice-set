import {useState} from 'react';
import './App.css';

function App() {
  const [inputlist,setinputList]= useState("")
  const[item,setItem] =useState([])
  const itemAdded = (e) =>{
        setinputList(e.target.value)
  }
  const addtoList=()=>{
        setItem((olditem)=>{
           return [ ...olditem,inputlist]
        })
        setinputList("")
  }
  const deleteItem = (id) =>{
      console.log("deleted")

      setItem((olditem)=>{
        return olditem.filter((old,index)=>{
            return index !== id;
        });
     });
  }
  return (
    <div className="App">
    <div className="centerdiv">
        <h2>To do list</h2>
        <input type="text" value={inputlist} placeholder="add items" onChange={itemAdded}/>
        <button onClick={addtoList}>
          +
        </button>

       <ul>
        {
          item.map((iteme,i)=>{
                return <li key={i}>  {iteme} <button onClick={deleteItem}>x</button></li>
          })
        }
       </ul>
    </div>
    </div>
  );
}

export default App;
