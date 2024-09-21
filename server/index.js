
const express=require('express');
const mysql=require('mysql2');
const app=express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://react-db-client.vercel.app/');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Max-Age','50');
  next();
});
const con=mysql.createPool({
  connectionLimit : 1000,
  host:"bukizqz3mcfmz0fujebq-mysql.services.clever-cloud.com",
  user:"umtjkqcdnsnofkkx",
  password:"1Hys29EHS8HhWXYbvEZv",
  database:"bukizqz3mcfmz0fujebq",     
}); 

app.get('/users',(req,res)=>{
  con.query("SELECT * FROM information",(err,result)=>{
    res.status(200).json(result)
    
  })


})

//data comming from home page of frontend
app.post('/',(req,response,next)=>{
  const {password,email}=req.body;
  const data={ password,email }
 
con.query("insert into information (username,password) values (?,?)",[data.email,data.password],(err,result)=>{
      if(err){
        response.status(200).json({error:""})
        console.log(err);
      }else{
        response.status(200).json({success:"Stored in database"})
        console.log(result);
      }
    }); 
    
});


app.get("/",(req,res)=>{
  res.json("Hello world");
});

//delete app.listen in development
const port=4080;
app.listen(port,()=>{
  console.log(`server running at ${port}`);
});



