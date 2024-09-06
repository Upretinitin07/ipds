import React ,{useState} from 'react'
import styles from  './css/newticket.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Newticket = () => {
  
  const [ticket,setTicket]=useState({
      name:'',
      employeeid:'',
      subject:'',
      image:'',
      description:'',
  });
      const navigate=useNavigate()

      const handleSubmit=(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', ticket.name);
        formData.append('employeeid', ticket.employeeid);
        formData.append('subject', ticket.subject);
        formData.append('image', ticket.image);
        formData.append('description', ticket.description);

        axios.post('http://localhost:3005/auth/newticket',formData)
        .then(result=> {
          if(result.data.Status){
            navigate('/ticket')
          }
          else{
            alert(result.data.Error)
          }
        })
        .catch(err => console.log(err))
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
                    onChange={(e)=> setTicket({...ticket, name:e.target.value})}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="employeeid">Employee Id:</label>
                <input
                    type="text"
                    id="employeeid"
                    name="employeeid"
                    onChange={(e)=> setTicket({...ticket, employeeid:e.target.value})}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject" 
                    onChange={(e)=> setTicket({...ticket, subject:e.target.value})}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="image">Select Image:</label>
                <input
                    type="file"
                    id="image"
                    name="image" 
                    onChange={(e)=> setTicket({...ticket, image:e.target.files[0]})}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={(e)=> setTicket({...ticket, description:e.target.value})} 
                />
            </div>

            <button className={styles.submitButton} type="submit">Submit Ticket</button>
        </form>

    </div>
  )
}

export default Newticket
