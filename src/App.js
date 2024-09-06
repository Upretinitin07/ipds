import './App.css';
import Login from './Components/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Helpdesk from './Components/helpdesk';
import Minorproblem from './Components/minorproblem';
import Application from './Components/application';
import File from './Components/file';
import Printer from './Components/printer';
import Landing from './Components/landing';
import Ticket from './Components/ticket';
import Newticket from './Components/newticket';
import Adminticket from './Components/adminticket';
import Editticket from './Components/editticket';
import Addemployee from './Components/addemployee';
import Ipds from './Ipds/home/ipds.jsx';
import Aboutus from './Ipds/aboutus/aboutus.jsx';

function App() {
  return (
 
  <BrowserRouter>
  <Routes>
    <Route path='/Home' element={<Ipds/>}></Route>
    <Route path='/Aboutus' element={<Aboutus/>}></Route>


    <Route path='/helpdesk' element={<Helpdesk/>}>
       <Route path='/helpdesk' element={<Landing/>}></Route>
       <Route path='/helpdesk/minorproblem' element={<Minorproblem/>}></Route>
       <Route path='/helpdesk/printer' element={<Printer/>}></Route>
       <Route path='/helpdesk/file' element={<File/>}></Route>
       <Route path='/helpdesk/application' element={<Application/>}></Route>
       <Route path='/helpdesk/newticket' element={<Newticket/>}></Route>
       <Route path='/helpdesk/ticket' element={<Ticket/>}></Route>
    </Route>



    <Route path='/login' element={<Login/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='/dashboard/addemployee' element={<Addemployee/>}></Route>
      <Route path='/dashboard/adminticket' element={<Adminticket/>}></Route>
      <Route path='/dashboard/editticket/:id' element={<Editticket/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  ) 
}

export default App;
