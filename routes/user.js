var express = require('express');
var router = express.Router();

var db = require("../config/db.js");

/**
 * 查询列表页
 */
router.get("/",function(req,res,next){
    db.query("select * from express",function(err,rows){
        if(err){
            res.render("users",{title:"用户列表",datas:[]});
        }else {
            res.render("users",{title:"用户列表",datas:rows});
        }
    });
});

/**
 * 添加用户
 */
router.get("/add",function(req,res,next){
    res.render("add");
});
router.post("/add",function(req,res,next){
//	DECLARE col_id INT;
//	SELECT max_id INTO col_id FROM id_help WHERE table_name='tableName';
//	UPDATE id_help SET max_id = col_id + 1;
//	SELECT col_id + 1;

    var name = req.body.name;
    var age = req.body.age;
    var id = req.body.id;
    var password = req.body.password;
    
    db.query("insert into express (id,name,age,password) values('"+id+"','"+name+"','"+age+"','"+password+"')",function(err,rows){
        if(err){
            res.send("新增失败"+err);
          }else {
            res.redirect("/users");
        }
    });
});

/**
 * 删除用户
 */
router.get("/del/:id",function(req,res){
    var id = req.params.id;
    db.query("delete from express where id = " + id,function(err,rows){
        if(err){
            res.send("删除失败"+err);
        }else {
            res.redirect("/users");
        }
    });
});

/**
 * 修改
 */
router.get("/toUpdate/:id",function(req,res,next){
    var id = req.params.id;
    var sql = "select * from express where id = " + id;
    console.log(sql);
    db.query(sql,function(err,rows){
        if(err){
            res.send("修改页面跳转失败");
        }else {
            res.render("update",{datas:rows});
        }
    });
});

router.post("/update",function(req,res,next){
    var id = req.body.id;
    var name = req.body.name;
    var age = req.body.age;
    var password = req.body.password;
    var sql = "update express set name = '"+ name +"',age = '"+ age +"',password = '"+password +"' where id = " + id;
    console.log(sql);
    db.query(sql,function(err,rows){
        if(err){
            res.send("修改失败 " + err);
        }else {
            res.redirect("/users");
        }
    });
});


/**
 * 查询
 */
router.post("/search",function(req,res,next){
    var name = req.body.s_name;
    var age = req.body.s_age;
    var sql = "select * from firstlist";
    if(name){
        sql += " where name = '"+ name +"'";
    }
    //if(age){
    //    sql += " and age = '" + age + "'";
    //}

    sql.replace("and","where");
    db.query(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.render("users",{title:"用户列表",datas:rows,s_name:name,s_age:age});
        }
    });
})

module.exports = router;