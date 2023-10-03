import './display.css'

  const DisplayArrofObjects = () => {
    const userdata = [
      {
        "id": 1,
        "fname": "Tuhin",
        "lname": "Ghosh",
        "age": 20
      },
      {
        "id": 2,
        "fname": "Tuhin2",
        "lname": "Ghosh2",
        "age": 21
      },
      {
        "id": 3,
        "fname": "Tuhin3",
        "lname": "Ghosh3",
        "age": 22
      },
      {
        "id": 4,
        "fname": "Tuhin4",
        "lname": "Ghosh4",
        "age": 23
      },
      {
        "id": 5,
        "fname": "Tuhin5",
        "lname": "Ghosh5",
        "age": 24
      },
      {
        "id": 6,
        "fname": "Tuhin6",
        "lname": "Ghosh6",
        "age": 25
      }
    ]
    return (
      <div className='disp1'>
        <h1>This is a simple table to show data</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </thead>
          <tbody>{
            userdata.map((eachuser)=>(
            <>
            <td>{eachuser.id}</td>
            <td>{eachuser.fname}</td>
            <td>{eachuser.lname}</td>
            <td>{eachuser.age}</td>
            </>
            )
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
  
  export default DisplayArrofObjects;