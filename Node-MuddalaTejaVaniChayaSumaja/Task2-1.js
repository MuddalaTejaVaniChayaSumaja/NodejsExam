var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"exam"
});
con.connection(
exports.data=function (err,exam){
    if(err) throw err;
    con.query("create database exam",function(err,result){
        if(err) throw err;
        console.log("datbase created");
    });
});
con.connection(
exports.table=function (err,exam){
 if(err) throw err;
 con.query("create table ant(id int  NOT NULL AUTO_INCREMENT, name varchar(255),primary Key (id),department VARCHAR(100 ),salary DECIMAL(10,2));",function(err,result){
    if(err) throw err;
    console.log("table created");
});
});