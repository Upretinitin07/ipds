import React from 'react'
import "../css/ipds.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Page1 from './page1'
import Page2 from './page2'
import Navbar from './navbar'
import Page3 from './page3'
import gsap from 'gsap';
import Page4 from './page4'
import { useGSAP } from '@gsap/react';
import Page5 from './page5'
import Footer from './footer'




gsap.registerPlugin(useGSAP);
const Ipds = () => {

  const{contextSafe}= useGSAP()

  const playbtn = contextSafe(function(){
    gsap.to("#play",{
      scale:1,
      opacity:1,
  })
  })
  const playbtn1 = contextSafe(function(){
    gsap.to("#play",{
      scale:0,
      opacity:0
  })
  })
  const playbtn2 = contextSafe(function(dets){
    const { clientX: x, clientY: y } = dets;
    gsap.to("#play",{
      left:x-8,
      top:y-8,
  })
  })
  return (
    <div  className="Main"  onMouseEnter={playbtn} onMouseLeave={playbtn1} onMouseMove={playbtn2} >
      <div id="play"></div>
      <Navbar/>
     <Page1/>
     <Page2/>
     <Page3/>
     <Page4/>
     <Page5/>
     <Footer/>
    </div>
    
  )
}

export default Ipds
