
import { useState } from 'react';
import './App.css';
import axios  from 'axios';
import { toast,Bounce } from 'react-toastify';


function App() {
  const [Email,setEmail]=useState('');
  const [Password,setPass]=useState('');
 const submitHandler=(e)=>{
  e.preventDefault();

  toast.success(`Thank You..`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
 //back-end:url (it sents data from frontend -> backend server) 
try{
  axios.post('https://react-db-eta.vercel.app/',{email: Email,password:Password})
}
   catch(error){
      if(Eror){
    toast.error(`Email ID Already Exist`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce
     });
   }
     else{
       toast.success("Form submmited successfully")
     }
   }
 }
  return (
    <div className="App">
      <form onSubmit={submitHandler} className='container'>
      <div className='input'>
      <center>LOGIN</center>
      <label >Email</label>
      <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='abc@gmail.com' required/>
      <label>Password</label>
      <input type='password' onChange={(e)=>setPass(e.target.value)} placeholder='Password'  required/>
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
