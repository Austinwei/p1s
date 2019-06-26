/*---------------商品表----------------*/
//jQuery方法向后端请求数据
$(function(){
    var divs=$("div.F1>div");
    $.ajax({
        url:"http://localhost:3000/product/checkNewProduct",
        type:"get",
        dataType:"json",
        success:function(result){
        
            //返回result为数组，根据其长度决定div的个数，并循环这个次数
            for(var i=0;i<result.length;i++){
                var p=result[i];
                var html=`<a href="${p.href}">
                                <img src="${p.pic}" alt="">
                            </a>
                            <div>
                                <p>${p.pname}</p>
                                <p>${p.details}</p>
                                <p>￥${p.price.toFixed(2)}</p>       
                            </div>`
                divs.eq(i).html(html);            
            }
        }
    })
})
//
$(function(){
    var divs=$("div.F2>div");
    $.ajax({
        url:"http://localhost:3000/product/checkBestProduct",
        type:"get",
        dataType:"json",
        success:function(result){
            //console.log(result);
            //返回result为数组，根据其长度决定div的个数，并循环这个次数
            for(var i=0;i<result.length;i++){
                var p=result[i];
                var html=`<a href="${p.href}">
                                <img src="${p.pic}" alt="">
                            </a>
                            <div>
                                <p>${p.pname}</p>
                                <p>${p.details}</p>
                                <p>￥${p.price.toFixed(2)}</p>       
                            </div>`
                divs.eq(i).html(html);
            }
        }
    })
})
//
$(function(){
    var divs=$("div.F3>div");
    $.ajax({
        url:"http://localhost:3000/product/checkNowProduct",
        type:"get",
        dataType:"json",
        success:function(result){
            //console.log(result);
            //返回result为数组，根据其长度决定div的个数，并循环这个次数
            for(var i=0;i<result.length;i++){
                var p=result[i];
                var html=`<a href="${p.href}">
                                <img src="${p.pic}" alt="">
                            </a>
                            <div>
                                <p>${p.pname}</p>
                                <p>${p.details}</p>
                                <p>￥${p.price.toFixed(2)}</p>       
                            </div>`
                divs.eq(i).html(html);
            }
        }
    })
})
/*---------------轮播图----------------*/
//定时器
var $carousel_ul=$(".carousel_ul")
var n=0
//当不发生点击事件，初始定时器timer
var timer=setInterval(function(){
    $carousel_ul.css({
        "left":$("#carousel_button").children().eq(n).prevAll().length*-1518,   
    });
    $("#carousel_button").children().eq(n).addClass("thiscolor").siblings().removeClass("thiscolor");
    n<4 ? n++ : n=0;
},5000);
//当发生点击事件，清除定时器timer,并重新建立新定时器timer，起始不同
$("#carousel_button").on("click","li",function(){
    clearInterval(timer);
    $(this).addClass("thiscolor").siblings().removeClass("thiscolor");
    $carousel_ul.css({"left":$(this).prevAll().length*-1518});
    n=$(this).index();
    timer=setInterval(function(){
        $carousel_ul.css({
            "left":$("#carousel_button").children().eq(n).prevAll().length*-1518,   
        });
        $("#carousel_button").children().eq(n).addClass("thiscolor").siblings().removeClass("thiscolor");
        n<4 ? n++ : n=0;
    },5000);
});

//向localhost:3000发送ajax请求，获得返回的数组
/*
(function(){
    var divs=document.querySelectorAll("div.F1>div");
    ajax({
        url:"http://localhost:3000/product/checkNewProduct",
        type:"get",
        dataType:"json"
    })
    .then(function(result){
        console.log(result);
        //返回result为数组，根据其长度决定div的个数，并循环这个次数
        for(var i=0;i<result.length;i++){
            var p=result[i];
            var html=`<a href="${p.href}">
                            <img src="${p.pic}" alt="">
                          </a>
                      <div>
                            <p>${p.pname}</p>
                            <p>${p.details}</p>
                            <p>￥${p.price.toFixed(2)}</p>       
                      </div>`
            divs[i].innerHTML=html;
        }
    })
})()
*/
        
/* 自闭的自循环bug
for(var i in divs){
    for(var i in result){
        var p=result[i];
        var html=`<a href="${p.href}">
                    <img src="${p.pic}" alt="">
                    </a>
                <div>
                    <p>${p.pname}</p>
                    <p>${p.details}</p>
                    <p>￥${p.price.toFixed(2)}</p>       
                </div>`
        console.log(div.innerHTML=html);
    };   
}
*/
