const express=require('express');

//引入路由
const userRouter=require('./router/user');
const newRouter=require('./router/new');
const softRouter=require('./router/software');
const indexRouter=require('./router/index');
const columnRouter=require('./router/column');
const bodyParser=require('body-parser');
const app=express();

app.listen(8888);

//post请求数据解析为对象
app.use(bodyParser.urlencoded({
    entended:false
}))
app.get('/',(req,res)=>{
   // res.redirect("http://127.0.0.1:8888/index.html");
    res.sendFile(__dirname+'/index.html');
})


app.use('/public',express.static('./public'));
app.use('/assets',express.static('./assets'));
app.use('/node_modules',express.static('./node_modules'));

//挂在到路由器上
app.use('/user',userRouter)
app.use('/new',newRouter)
app.use('/soft',softRouter)
app.use('/index',indexRouter)
app.use('/column',columnRouter)