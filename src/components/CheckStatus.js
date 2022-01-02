import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function CheckStatus(){

    const[response,setResponse]=useState()
    const[success,setSuccessStatus]=useState()

    function submitHandler(){
        axios.post(`http://localhost:5000/checkstatus`, {publickey})
      .then(res => {
        console.log(res);
        console.log(res.data);
        setResponse(res.data);
        setSuccessStatus(true);
      })
  }
 

const [publickey,setpublickey]=useState("")
return(
  <div className='checkstatus'>
  <h1>Check Status of your Parcel</h1>
    <input
          type="text" 
          value={publickey}
          onChange={(e) => setpublickey(e.target.value)}
        /><br/>
    <button onClick={submitHandler} className='submitbutton'>Submit</button>
    {success &&
    <div>
        Your Package was Delivered at Location: {response.location}<br/>
        Email Id : {response.email}<br/>
        At time : {response.time}<br/>

    </div>}
  </div>
  
  )
  
}
export default CheckStatus;