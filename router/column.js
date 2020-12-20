const express=require('express');
const path=require('path')
// 引入连接池的模块
const pool=require('../pool.js');
//创建路由器对象

const r=express.Router();


//中间处理各种数据
r.get('/columns',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/column.html'));
})
//热门专栏
r.get('/columnList',(req,res)=>{
    pool.query('select * from news limit 6',(err,result)=>{
        if(err) throw err;
        else{
            console.log(result);
            res.json(result);
        }
    });
})
//页面跳转
r.get('/columninfo',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/columninfo.html'));
})

// 热门作者
r.get('/authorList',(req,res)=>{
    pool.query('select * from author order by num desc limit 6',(err,result)=>{
        if(err) throw err;
        else{
            res.json(result);
        }
    })
})
r.get('/authorList2',(req,res)=>{
    pool.query('select * from author',(err,result)=>{
        if(err) throw err;
        else{
            res.json(result);
        }
    })
})
//轮播下的专栏内容
r.get('/contList',(req,res)=>{
    pool.query('select id,cols.name as cname,cols.description,imgurl,author.name as aname,aimgurl from cols,author where cols.id=author.aId',(err,result)=>{
        if(err) throw err;
        else{
            res.json(result);
        }
    })
})
r.get('/cont',(req,res)=>{
    let a=req.query.cnum;
    console.log(a);
    pool.query('select colcont.*,cols.name as cname from colcont,cols where ' +
        'colcont.colId=cols.id and colcont.colId=?',[a],(err,result)=>{
        if (err) throw err;
        else{
            console.log(result);
            res.json(result);
        }
    })

})
//导出路由器
module.exports=r;
