const express=require('express');
const path=require('path')
// 引入连接池的模块
const pool=require('../pool');
//创建路由器对象

const r=express.Router();


//导出路由器
module.exports=r;