//连接数据库
const mysql=require('mysql');

const pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
<<<<<<< HEAD
    password:'20150324',
=======
    password:'87654321',
>>>>>>> 473bf861dd4bbcbb695ef4bd673990a9038d7b69
    database:'myweb',
    connectionLimit:'20'
})

module.exports=pool;