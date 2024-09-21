import axios  from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

 function Result(){

  const [data,setDa]=useState(" ")
   function fetched() {
   axios.get("https://react-db-eta.vercel.app/users")
   .then(r=>setDa(r.data))  
    console.log("test",data)
  } 
 
useEffect(()=>{
  fetched()
},[])


  return (
    <>
    <div className='float shadow-lg'>
      <Link to="/">

      <i class="bi bi-house"/>
      </Link>
     </div>
    <h1 className='text-secondary'>Users</h1>
    <table class="table shadow-lg p-3">  
        {data===" "?<h5 className='text-center'>Loading...</h5>: 
        <table>
          <tr>
            <th>Email</th>
            <th>Password</th>
        </tr>
          {data.map((user,index) => (
        <tr className='d' key={index}>
          <td>{user.username}</td>
          <td className='text-center'>{user.password}</td>
        </tr>
      ))}</table>}
    </table> 
    </>
  )
}

export default Result;
