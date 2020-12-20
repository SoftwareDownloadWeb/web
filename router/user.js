const express=require('express');
const path=require('path');
// 引入连接池的模块
const pool=require('../pool.js');
//创建路由器对象

const r=express.Router();

//登录
r.post('/login',(req,res)=>{
   let username=req.body.username;
   let password=req.body.password;
   pool.query("SELECT name FROM user WHERE name= ? AND password = ?",[username,password],function (err,data){
      if(err) throw err;
      res.cookie('mystatus','log',{path:'/',maxAge:60*1000*200});
      if (data.length!==0) {
         res.cookie('username',data[0].name,{path:'/',maxAge:60*1000*200});
         res.end();
      }else{
         res.cookie('username','error',{path:'/',maxAge:60*1000*200});
         res.end();
      }

   })

})
//注册
r.post('/register',(req,res)=>{
   let username=req.body.username;
   let email=req.body.email;
   let password=req.body.password;
   pool.query("SELECT * FROM user WHERE email = ?",[email],function (err,data){
      if(err) throw err;
      if (data.length!==0){
         res.cookie('mystatus','error',{path:'/',maxAge:60*1000*200});
         res.end();
      }
      else{
         pool.query('INSERT INTO user (name,password,email) VALUES (?,?,?)',[username,password,email],function (err,data){
            if(err) throw err;
            res.cookie('mystatus','success',{path:'/',maxAge:60*1000*200});
            res.end();
         });
      }
   })
})


//导出路由器
module.exports=r;
