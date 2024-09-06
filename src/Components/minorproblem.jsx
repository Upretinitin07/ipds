import React from 'react'
import './css/minorproblem.css' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Outlet } from 'react-router-dom';


const Minorproblem = () => {
  return (
    <div className="main">
    <center><h1>Select your type of problem </h1></center> 
    <div className='d-flex justify-content-around'> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.gizbot.com/webp/img/2017/09/canonir30201-21-1506017005.jpg" />
      <Card.Body>
        <Card.Title>Printer Related Problems</Card.Title>
        <Link to='/printer'> <Button className="mt-5" variant="primary">   Click Here  </Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height:'30vh'}}variant="top" src="https://cdn.icon-icons.com/icons2/402/PNG/512/open-file_40455.png"/>
      <Card.Body>
        <Card.Title>File Server Related Problems</Card.Title>
        <Link to='/file'><Button className='mt-4' variant="primary">Click Here</Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/file-format-icons-collection_629597-30.jpg?w=360" />
      <Card.Body>
        <Card.Title>Application Related Problems</Card.Title>
        <Link to='/application'> <Button className="mt-4"variant="primary">Click Here</Button></Link>
      </Card.Body>
    </Card>
      </div>
      <Outlet/>
  </div>
   

  )
}



export default Minorproblem
