import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './css/home.css'

const Helpdesk = () => {
  return (
    <div className="boss">
    <aside className="sidebar">
    <Link to="/helpdesk"><h2>Help Desk</h2></Link>
        <nav>
            <ul>
                <li><Link to='/helpdesk/minorproblem'> Minor Problem </Link></li>
                <li><Link to='/helpdesk/newticket'>New Ticket</Link></li>
                <li><Link to='/helpdesk/ticket'>Ticket</Link></li>
    
            </ul>
        </nav>
    </aside>
    <main className="main-content">
       
        <section id="dashboard" className="content-section">

          
            
        </section>
        <section id="users" className="content-section">
            
           
        </section>
        <section id="settings" className="content-section">
            
            
        </section>
        <section id="reports" className="content-section">
           
            
        </section>
        <Outlet/>
    </main>
    
</div>
  )
}

export default Helpdesk