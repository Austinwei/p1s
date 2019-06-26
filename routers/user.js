//引入express模块
const express=require("express");
//引入自定义模块
const pool=require("../pool.js");
//创建空路由器
const router=express.Router();
//添加路由
//1.用户注册
router.get("/checkuname",(req,res)=>{
	var $uname=req.query.uname;
	if(!$uname){
		res.send("用户名为空");
		return;
	}
	var sql="select * from user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")
		}
	});
});
//用户注册接口
router.post("/register",(req,res)=>{
	var $uname=req.body.uname;
	if(!$uname){
		res.send({code:401,msg:"用户名不能为空"});
		//阻止继续执行
		return;
	}
	var $upwd=req.body.upwd;
	if(!$upwd){
		res.send({code:402,msg:"密码不能为空"});
		return;
	}
	var $phone=req.body.phone;
	if(!$phone){
		res.send({code:403,msg:"手机号不能为空"});
		return;
	}
	var $email=req.body.email;
	if(!$email){
		res.send({code:404,msg:"邮箱不能为空"});
		return;
	}
	var $sex=req.body.sex;
	//执行sql语句，将数据添加到数据库ma的user表中。
	var sql="INSERT INTO user VALUE (null,?,?,?,?,?,null)"
	pool.query(sql,[$uname,$upwd,$sex,$phone,$email],(err,result)=>{
		if(err) throw err;
	});
	res.send({code:200,msg:"注册成功"});
});
//导出路由对象
module.exports=router;