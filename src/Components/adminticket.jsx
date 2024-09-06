import React, { useEffect,useState} from 'react'
import  './css/ticket.css'
import axios from 'axios'
import { Link} from 'react-router-dom'


const Adminticket = () => {
  const[ticket,setTicket]= useState([])


  useEffect(()=>{
    axios.get('http://localhost:3005/auth/adminticket')
    .then(result=>{
      if(result.data.Status){
        setTicket(result.data.Result);
      } else{
        alert(result.data.Error)
      }
    }).catch(err=> console.log(err))
  },[])
  const handleDelete=(id)=>{
    axios.delete('http://localhost:3005/auth/deleteticket/'+id)
    .then(result=>{
      if(result.data.Status){
        window.location.reload()
      } 
      else{
        alert(result.data.Error)
      }
    })
  }
  return (
   <div className='main'>
    <table className="table">
   <thead className="thead-dark">
    <tr>
      <th scope="col"><center>id</center></th>
      <th scope="col"><center>Name</center></th>
      <th scope="col"><center>Employeeid</center></th>
      <th scope="col"><center>Subject</center></th>
      <th scope="col"><center>Image</center></th>
      <th scope="col"><center>Description</center></th>
      <th scope="col"><center>Status</center></th>
      <th scope="col"><center>Action</center></th>
      
    </tr>
  </thead>
  <tbody>
    {
      ticket.map(e=>(
        <tr>
          <td><center>{e.id}</center></td>
          <td><center>{e.name}</center></td>
          <td><center>{e.employeeid}</center></td>
          <td><center>{e.subject}</center></td>
          <td><center><img src={`http://localhost:3005/Images/`+e.image} alt="" className='dbimage'></img></center></td>
          <td><center>{e.description}</center></td>
          <td><center>{e.status}</center></td>
          <td><center>
          <Link to={`/dashboard/editticket/`+e.id}><button type="button" class="btn btn-warning me-2">Edit</button></Link> 
          <button type="button" class="btn btn-danger" onClick={()=> handleDelete(e.id)}>Delete</button>
          </center></td>
        </tr>
      ))
    }
  </tbody>
</table>
   </div>
  )
}

export default Adminticket