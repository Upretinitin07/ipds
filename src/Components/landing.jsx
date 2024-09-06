import React from 'react'
import './css/landing.css'
import Landingpage from "./images/Animation - 1721827119382.json"
import Lottie from "lottie-react"

const Landing = () => {
  return (
    <div className='main'>
      <h1 className='font-link'>IT HELP DESK</h1> <br />
      <p className='font-link1'>Your one-stop solution for all IT support <br></br> needs.</p>
     <Lottie className='l1' animationData={Landingpage}></Lottie>
    </div>
  )
}

export default Landing
