//引入express模块
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
//引入自定义模块
//用户模块
const userRouter=require("./routers/user.js");
//商品模块
const productRouter=require("./routers/product.js");
//创建web服务器，设定3000端口
var server=express();
server.listen(3000);
//使用cors中间件，实现跨域访问
server.use(cors({origin:"http://127.0.0.1:5500"}))
//托管静态资源到pubilc目录下
server.use(express.static("public"));
//使用body-parser中间件，将post请求数据解析为对象，必须写在路由前
server.use(bodyParser.urlencoded({
	extended:false 
}));
//把路由器挂载到user
server.use("/user",userRouter);
server.use("/product",productRouter);
