
import { useState } from 'react';
import './App.css';
import axios  from 'axios';

function App() {
  const [Email,setEmail]=useState('');
  const [Password,setPass]=useState('');
 const submitHandler=async(e)=>{
  e.preventDefault();
 //back-end:url (it sents data from frontend -> backend server) 
 await axios.post('http://localhost:4080/',{email: Email,password:Password},alert("Inserted into database"))
 .then((data)=>{ 
  alert(data);
 }).catch((err)=>{
 if(err){
  alert(err.message)
 }else{
  alert("Thank you")
 }
 });


 }
  return (
    <div className="App">
      <form onSubmit={submitHandler} className='container'>
      <div className='input'>
      <center>LOGIN</center>
      <label >Email</label>
      <input type='email' onChange={(e)=>setEmail(e.target.value)} required/>
      <label>Password</label>
      <input type='password' onChange={(e)=>setPass(e.target.value)}  required/>
      </div>
      <div className='btn'>
      <button type='submit'>Submit</button>
      <button type='reset'>Reset</button>
      </div>
      </form>
    </div>
  );
}

export default App;
