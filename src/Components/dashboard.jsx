import React from 'react'
import './css/dashboard.css' 
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="boss">
        <aside className="sidebar">
            <h2>Admin Panel</h2>
            <nav>
                <ul>
                    <li><Link to="/dashboard/addemployee">Add Employee</Link></li>
                    <li><Link to="/dashboard/adminticket">Ticket</Link></li>
                    
                </ul>
            </nav>
        </aside>
        <main className="main-content">
            <header>
                <h1>Dashboard</h1>
                <button id="logoutButton">Logout</button>
            </header>
            <section id="dashboard" className="content-section">
              
                
            </section>
            <section id="users" className="content-section">
                
               
            </section>
            <section id="settings" className="content-section">
                
                
            </section>
            <section id="reports" className="content-section">
               
                <Outlet/>
            </section>
        </main>
    </div>
  )
}

export default Dashboard

                               