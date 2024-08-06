
const express=require('express');
const mysql=require('mysql2');
const app=express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.options('/', (req,res,next)=>{
  req.header('Access-Control-Allow-Origin','https://react-db-client.vercel.app/');
  )

//data comming from home page of frontend
app.post('/',(req,res)=>{
  req.header('Access-Control-Allow-Origin','https://react-db-client.vercel.app/');
  const {password,email}=req.body;
  const data={
      password,email
  }
  const con=mysql.createPool({
      connectionLimit : 1000,
      host:"bukizqz3mcfmz0fujebq-mysql.services.clever-cloud.com",
      user:"umtjkqcdnsnofkkx",
      password:"1Hys29EHS8HhWXYbvEZv",
      database:"bukizqz3mcfmz0fujebq",     
    });

    
    con.query("insert into information (username,password) values (?,?)",[data.email,data.password],(err,result)=>{
      if(!err){
        console.log("inserted");
      }
      console.log(result);
    })
});


app.get("/",(req,res)=>{
  res.json("Hello world");
});

//delete app.listen in development
const port=4080;
app.listen(port,()=>{
  console.log(`server running at ${port}`);
});



