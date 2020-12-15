const express=require('express');
const path=require('path')
// 引入连接池的模块
const pool=require('../pool.js');
//创建路由器对象

let r=express.Router();
//引入模板引擎
const template=require('art-template');

r.get('/software',(req,res)=>{
    //res.send('download success');
    res.sendFile(path.join(__dirname,'../public/software.html'));
});
r.post('/showcategory',(req,res)=>{
    pool.query("SELECT DISTINCT category_num,category_name FROM software ORDER BY category_num",(err,resulst)=>{
        if(err) throw err;
        else{
            let data = JSON.parse(JSON.stringify(resulst));
            res.send({code:200,msg:'showsoftware success',categorylist:data});
        }
    });
});


r.post('/downloadlist',(req,res)=>{
    pool.query("SELECT soft_name,category_num,downloadType,imgurl FROM software ORDER BY soft_name",(err,resulst)=>{
        if(err) throw err;
        else{
            let downloadlist=[];
            let soft= {'soft_name':null,'category_num':null,'imgurl':null,downloadType:[]};
            for(var r of resulst){
                if(soft.soft_name==null){
                    soft.soft_name=r.soft_name;
                    soft.category_num=r.category_num;
                    soft.imgurl=r.imgurl;
                }
                if (soft.soft_name!==r.soft_name){    //已获得上一个软件所有信息
                    downloadlist.push(soft);         //将上一个软件的信息加入列表
                    soft= {'softname':null,'category_num':null,'imgurl':null,downloadType:[]};
                    soft.soft_name=r.soft_name;
                    soft.category_num=r.category_num;
                    soft.imgurl=r.imgurl;
                }
                soft.downloadType.push(r.downloadType);

            }
            downloadlist.push(soft);
            let data=JSON.parse(JSON.stringify(downloadlist));
            res.send({code:200,msg:'showsoftware success',downloadlist:data});
        }
    });
});

r.get('/softwareinfo',(req,res)=>{
    //console.log(req.query);
    res.sendFile(path.join(__dirname,'../public/software_info.html'));
});
r.post('/infolist',(req,res)=>{
    let softname=req.body.softname;
    let downloadType=req.body.downloadType;
    pool.query("SELECT soft_name,downloadType,soft_icon,soft_size,environment,soft_describe,soft_install FROM software_info WHERE soft_name=? and downloadType=?",[softname,downloadType],(err,resulst)=>{
        if(err) throw err;
        else{
            let data = JSON.parse(JSON.stringify(resulst[0]));
            res.send({code:200,msg:'showinfo success',infolist:data});
        }
    });
});



//导出路由器
module.exports=r;
