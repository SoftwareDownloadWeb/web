//连接数据库
const mysql=require('mysql');

const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'20150324',
    database:'myweb',
    connectionLimit:'20'
})

module.exports=pool;