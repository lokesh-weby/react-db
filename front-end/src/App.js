
import { useState } from 'react';
import './App.css';
import axios  from 'axios';
import { toast,Bounce } from 'react-toastify';


function App() {
  const [Email,setEmail]=useState('');
  const [Password,setPass]=useState('');
 const submitHandler=(e)=>{
  e.preventDefault();

  toast.success(`Data Submitted`, {
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

 //  axios.post('https://react-db-eta.vercel.app/',{email: Email,password:Password})
 // .then((data)=>{ 
 //  alert(data);
 // }).catch((err)=>{
 // if(err){
 //  toast.error(`Failed to Connect`, {
 //    position: "top-center",
 //    autoClose: 5000,
 //    hideProgressBar: false,
 //    closeOnClick: true,
 //    pauseOnHover: true,
 //    draggable: true,
 //    progress: undefined,
 //    theme: "dark",
 //    transition: Bounce,
 //    });
 // }
 // else{
 //  toast("network issue")
 // }
 // });
   axios({
  method: 'post',  
withCredentials: false,
  url: 'https://react-db-eta.vercel.app/', 
     { email: 'Email',password: 'Password' }

})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
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
