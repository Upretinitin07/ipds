import React from 'react'
import  './css/majorproblem.css'

const Majorproblem = () => {
  return (
    <div className='main'>
      <h1>Fill This Form</h1>
      <form>
      <ul className="form-style-1">
        <li><label>Full Name <span className="required">*</span></label><input type="text" name="field1" className="field-divided" placeholder="First" /> <input type="text" name="field2" className="field-divided" placeholder="Last" /></li>
        <li>
            <label>Enter Vprpl Id<span className="required">*</span></label>
            <input type="text" name="field3" className="field-long" />
        </li>
        <li>
            <label>Your Department</label>
            <select name="field4" className="field-select">
            <option value="Tendering">Tendering</option>
            <option value="Purchase">Purchase</option>
            <option value="Accounts">Accounts</option>
            <option value="Engeneering">Engeneering</option>
            <option value="HR">HR</option>
            </select>
        </li>
        <li>
          <label>Add screen Shot</label>
        <input type="file" id="myfile" name="myfile" multiple />
        </li>
        <li>
            <label>Your Message <span className="required">*</span></label>
            <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
        </li>
        <li>
            <input type="submit" value="Submit" />
        </li>
    </ul>
    </form>
    </div>
  )
}

export default Majorproblem