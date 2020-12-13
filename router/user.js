const express=require('express');
const path=require('path');

// 引入连接池的模块
const pool=require('../pool.js');
//创建路由器对象

const r=express.Router();


//中间处理各种数据
r.post('/login',(req,res)=>{
   let username=req.body.username;
   let password=req.body.password;
   pool.query("SELECT name FROM user WHERE name= ? AND password = ?",[username,password],function (err,data){
      if(err) throw err;
      console.log(data);
      //存用户数据
      res.setHeader('status','200 OK');
      //name:变量名，path:cookie影响到的路径，向指定路径发送cookie;max-age:存活时间，单位秒
      //domain:cookie对那个域下是有效的 express:失效时间，默认关闭页面消失
      //secure：安全标志，设置为true时，http中无效，无法传递cookie，https中有效。
      //变量之间用;号隔开
      res.setHeader('Set-Cookie','name='+data[0].name+';path=/;max-age=60*1000');
      res.redirect("http://127.0.0.1:8888/index.html");
      //res.send("欢迎登录")
   })
  // res.sendFile(path.join(__dirname,'../public/login.html'));
   // res.redirect('http://baidu.com');
   // res.send("h?");

})


//导出路由器
module.exports=r;