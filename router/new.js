const express=require('express');
const path=require('path')
// 引入连接池的模块
const pool=require('../pool.js');
//创建路由器对象

const r=express.Router();


//中间处理各种数据
r.get('/news',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/news.html'));
})
r.get('/hotnew',(req,res)=>{
    console.log(req.query.username);
    pool.query('select * from news',(err,result)=>{
        if(err) throw err;
        else{
            console.log(result);
            res.json(result);
        }
    });
})
r.get('/pageinfo',(req,res)=>{
    let a=req.query.num;
    pool.query('select * from detailnew where infoId=?',[a],(err,result)=>{
        if(err) throw err;
        else{
            console.log(result);
            res.json(result);
        }
    });
})
r.get('/newsinfo',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/newsinfo.html'));
})
r.get('/columninfo',(req,res)=>{
    let id=req.query.num;
    pool.query('select * from detailnew where infoId=?',[id],(err,result)=>{
        if(err) throw err;
        else{
            console.log(result);
            let json=JSON.stringify({
                msg:"成功",
                result:[{
                    "infoId":result[0].infoId,
                    "name":result[0].name,
                    "para1":result[0].para1,
                    "para2":result[0].para2,
                    "para3":result[0].para3,
                    "para4":result[0].para4,
                    "para5":result[0].para5,
                    "para6":result[0].para6
                }],
                status:1
            })

            res.json(result);
        }
    });
})


//导出路由器
module.exports=r;