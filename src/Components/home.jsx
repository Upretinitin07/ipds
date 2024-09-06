import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './css/home.css'

const Home = () => {
  return (
    <div className="boss">
    <aside className="sidebar">
    <Link to="/"><h2>Help Desk</h2></Link>
        <nav>
            <ul>
                <li><Link to='/minorproblem'> Minor Problem </Link></li>
                <li><Link to='/newticket'>New Ticket</Link></li>
                <li><Link to='/ticket'>Ticket</Link></li>
    
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

export default Home