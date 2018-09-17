//var mysql  = require('mysql');  
// 
//var connection = mysql.createPool({     
//host     : 'localhost',       
//user     : 'root',              
//password : 'xzj970605',                        
//database: 'firstmysql', 
//}); 
// 
//function query(sql,callback){
//  pool.getConnection(function(err,connection){
//      connection.query(sql, function (err,rows) {
//          callback(err,rows);
//          connection.release();
//      });
//  });
//}
//
//exports.query = query;

//导入所需模块  
var mysql=require("mysql");    
//导入配置文件  
//var cfg  =require("./config/db");  
var pool = mysql.createPool({    
      	host     : 'localhost',       
		user     : 'root',              
		password : 'xzj970605',                        
		database: 'firstmysql',    
//      port:    '3306'
});    
//导出查询相关  
var query=function(sql,callback){    
    pool.getConnection(function(err,conn){    
        if(err){    
            callback(err,null,null);    
        }else{    
            conn.query(sql,function(qerr,vals,fields){    
                //释放连接    
                conn.release();    
                //事件驱动回调    
                callback(qerr,vals,fields);    
            });    
        }    
    });    
};    

exports.query=query;  
