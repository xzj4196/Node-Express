
//导入所需模块  
var mysql=require("mysql");    
//导入配置文件  
//var cfg  =require("./config/db");  
var pool = mysql.createPool({    
      	host     : '',       // Ip
		user     : '',       // 用户名         
		password : '',         //密码               
		database: '',    //数据库
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
