import React, { useEffect,useState} from 'react'
import  './css/ticket.css'
import axios from 'axios'


const Ticket = () => {
  const[ticket,setTicket]= useState([])
  useEffect(()=>{
    axios.get('http://localhost:3005/auth/ticket')
    .then(result=>{
      if(result.data.Status){
        setTicket(result.data.Result);
      } else{
        alert(result.data.Error)
      }
    }).catch(err=> console.log(err))
  },[])
  return (
   <div className='main'>
    <table className="table">
   <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Employeeid</th>
      <th scope="col">Subject</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {
      ticket.map(e=>(
        <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.employeeid}</td>
          <td>{e.subject}</td>
          <td><img src={`http://localhost:3005/Images/`+e.image} alt="" className='dbimage'></img></td>
          <td>{e.description}</td>
          <td>{e.status}</td>
        </tr>
      ))
    }
  </tbody>
</table>
   </div>
  )
}

export default Ticket