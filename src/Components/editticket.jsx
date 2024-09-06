import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from  './css/editticket.module.css'
import axios from 'axios'

const Editticket = () => {
    const{id}=useParams()
    const [ticket,setTicket]=useState({
        name:'',
        employeeid:'',
        subject:'',
        description:'',
        status:'',
    });
    const navigate=useNavigate()
    
        useEffect(()=>{
            axios.get('http://localhost:3005/auth/ticket/'+id)
            .then(result=>{
               setTicket({
                ...ticket,
                name:result.data.Result[0].name,
                employeeid:result.data.Result[0].employeeid,
                subject:result.data.Result[0].subject,
                description:result.data.Result[0].description,
                status:result.data.Result[0].status
            })
            }).catch(err=>console.log(err))
            // eslint-disable-next-line 
        },[])
        

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:3005/auth/editticket/'+id, ticket)
        .then(result=>{
            if(result.data.Status){
                navigate('/dashboard/adminticket')
            }
            else{
                alert(result.data.Error)
            }
        }).catch(err=> console.log(err))
    }


  return (
    <div className='main'>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
              type="text"
              id="name"
              name="name"
              value={ticket.name}
              onChange={(e)=> setTicket({...ticket, name:e.target.value})}
          />
      </div>
      <div className={styles.formGroup}>
          <label htmlFor="employeeid">Employee Id:</label>
          <input
              type="text"
              id="employeeid"
              name="employeeid"     
              value={ticket.employeeid}         
              onChange={(e)=> setTicket({...ticket, employeeid:e.target.value})}
          />
      </div>
      <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input
              type="text"
              id="subject"
              name="subject" 
              value={ticket.subject}
              onChange={(e)=> setTicket({...ticket, subject:e.target.value})}
          />
      </div>
      
      <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea
              id="description"
              name="description"
              value={ticket.description}
              onChange={(e)=> setTicket({...ticket, description:e.target.value})} 
          />
      </div>
      <div className={styles.formGroup}>
      <label htmlFor="subject">Status:</label>
      <select name="hall" id="hall" className='btn btn-info' onChange={(e)=> setTicket({...ticket, status:e.target.value})}>
                <option>Success</option>
                <option>Pending</option>
                <option>Idle</option>
              </select>
      </div>

      <button className={styles.submitButton} type="submit">Submit Ticket</button>
  </form>

</div>
  )
}

export default Editticket
