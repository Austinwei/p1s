//引入express模块
const express=require("express");
//引入自定义模块
const pool=require("../pool.js");
//创建空的路由器
const router=express.Router();
//添加路由
//查询new的商品
router.get("/checkNewProduct",(req,res)=>{
    var sql="select * from product_detail where pstate = 'new'";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});
//查询bestSell的商品
router.get("/checkBestProduct",(req,res)=>{
    var sql="select * from product_detail where pstate = 'bestSell'";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});
//查询now的商品
router.get("/checkNowProduct",(req,res)=>{
    var sql="select * from product_detail where pstate = 'now'";
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});
//根据pid查询所有商品
router.get("/details",(req,res)=>{
    var pid=req.query.pid;
    if(pid!==undefined){
        var sql="select * from product_detail where pid=?";
        pool.query(sql,[pid],(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    }
});


//导出路由对象
module.exports=router;