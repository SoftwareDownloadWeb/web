//处理用户登录注册的路由
const express=require('express');
const path=require('path');

// 引入连接池的模块
const pool=require('../pool.js');
//创建路由器对象

const r=express.Router();


//中间处理各种数据
r.post('/login',(req,res)=>{
   console.log(req.body);
   let username=req.body.username;
   let password=req.body.password;
   pool.query("SELECT name FROM user WHERE name= ? AND password = ?",[username,password],function (err,data){
      if(err) throw err;
      if (data.length!==0) {
         console.log(data);
         res.cookie('username',data[0].name,{path:'/',maxAge:60*1000*200});
         res.end();
      }else{
         console.log("error");
         res.cookie('username','error',{path:'/',maxAge:60*1000*200});
         res.end();
      }

   })
  // res.sendFile(path.join(__dirname,'../public/login.html'));
   // res.redirect('http://baidu.com');
   // res.send("h?");

})


//导出路由器
module.exports=r;
