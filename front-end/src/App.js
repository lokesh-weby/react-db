
import { useState } from 'react';
import './App.css';
import axios  from 'axios';
import { toast,Bounce } from 'react-toastify';
import { Link } from 'react-router-dom';


function App() {

  function showPass(){
    var reveal=document.getElementById("passReveal")
   if(reveal.type==="password"){
      reveal.type="text"
   }
   else{
      reveal.type="password"
   }
    
    
  }
  const [Email,setEmail]=useState('');
  const [Password,setPass]=useState('');
 const submitHandler=(e)=>{
  console.log(Email);
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
     console.log(error.message)
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
 }
  return (
    <div className="App">
       <div className='float shadow-lg'>
      <Link to="/user">
      <i class="bi bi-person-lines-fill"/>
      <p>Users</p>
      </Link>
     </div>
      <form onSubmit={submitHandler} className='wrapper'>
      <div className='input'>
      <h4>REGISTRATION FORM</h4>
      <label >Email</label>
      <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='abc@gmail.com' required/>
      <label>Password</label>
      <input type='password' onChange={(e)=>setPass(e.target.value)} placeholder='Password' minLength={8} maxLength={8} id="passReveal" required/>
      <div>
      <input type='checkbox' id="pass" onClick={()=>showPass()}/>
      <label htmlFor='pass'>Show Password</label>

      </div>
      
      </div>
      <div className='btn'>
      <button type='submit'>Register</button>
      <button type='reset'>Reset</button>
      </div>
      </form>
    </div>
  );
}

export default App;
