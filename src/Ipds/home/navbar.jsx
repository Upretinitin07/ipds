import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
const Navbar = () => {

  // const navref=useRef()
  const{contextSafe}= useGSAP()
  
  const navbarenter = contextSafe(function(){
     
        let tl=gsap.timeline()
        tl.to("#nav-bottom",{
            height:"36vh"
        })
        tl.to("#navbarpart2 h5",{
          display:"block",
          duration: 0.1
        })
        tl.to("#navbarpart2 h5 span",{
          y:0,
          // duration:0.3,
          stagger:{
            amount:0.5
          }
        })
  })
  const navbarleave = contextSafe(function(){
     
    let tl=gsap.timeline()
    tl.to("#navbarpart2 h5 span",{
      y:25,
      stagger:{
        amount:0.2
      }
    })
    tl.to("#navbarpart2 h5",{
      display:"none",
      duration:0.1
    })
    tl.to("#nav-bottom",{
      height:0,
      duration:0.5
    })
})
  
  return (

    <div id='navbar'>
        <h1>IPDS.</h1>
        <div id="navbarpart2" onMouseEnter={navbarenter} onMouseLeave={navbarleave}>
          <div className="nav-elem"  > <h4>Home</h4>
          <a href="#">
                  <h5><span>Home</span></h5>
          </a></div>
          <div className="nav-elem"> <h4>About Us</h4>
          <a href="#">
               <h5><span>About Us</span></h5>
          </a></div>
          <div className="nav-elem"> <h4>Infrastructure Solution</h4>
          <a href="#">
                  <h5><span>Network Infrastructure</span></h5>
                </a>
                <a href="#">
                  <h5><span>Network & Endpoint Security</span></h5>
                </a><a href="#">
                  <h5><span>Wireless Solutions</span></h5>
                </a><a href="#">
                  <h5><span>Server & Storage</span></h5>
                </a><a href="#">
                  <h5><span>IP Telephony & Collaboration</span></h5>
                </a><a href="#">
                  <h5><span>CCTV Solutions</span></h5>
                </a><a href="#">
                  <h5><span>Structured Cabling</span></h5>
                </a><a href="#">
                  <h5><span>ELV Solutions</span></h5>
                </a>

                
          
          </div>
          <div className="nav-elem"> <h4>Cloud Solution</h4>
            <a href="#">
                <h5><span>Cloud Backup</span></h5>
                </a>
          <a href="#">
                  <h5><span>Cloud Computing</span></h5>
                </a>
              
          </div> 
          
          <div className="nav-elem"> <h4>Professional Services</h4>
          <a href="#">
                  <h5><span>Annual Maintantance Contract</span></h5>
                </a><a href="#">
                  <h5><span>Managed Services</span></h5>
                </a><a href="#">
                  <h5><span>IT Consultancy</span></h5>
                </a><a href="#">
                  <h5><span>Professional Expertise</span></h5>
                </a><a href="#">
                  <h5><span>Web Development</span></h5>
                </a>
          </div>
             
        </div>
        <button id='letstalk' >Let's Talk<svg fill="none" viewBox="0 0 20 20">
                <path fill="#fff" d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z">
                </path>
            </svg></button>
        <div id="nav-bottom"></div>
      
    </div>
  )
}

export default Navbar
