//折叠导航栏
var tabs=document.querySelectorAll("ul.row2_right>li>[data-click=tab]");
var conts=document.querySelectorAll("#container>div");
var zIndex=10;
for(var tab of tabs){
    tab.onmouseover=function(){
        var tab=this;
        for(var cont of conts){
            cont.style.height="260px"
            cont.onmouseover=function(){
                var cont=this;
                cont.style.height="260px"
            }
            cont.onmouseout=function(){
                var cont=this;
                cont.style.height="0px"
            }
        }
        var id=tab.getAttribute("data-div");
        var div=document.getElementById(id);
        div.style.zIndex=zIndex;
        zIndex++;
    }
    tab.onmouseout=function(){
        var tab=this;
        for(var cont of conts){
            cont.style.height="0px"
        }
    }
}
/*
$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(html){
            //引入页面
            $(html).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
        }      
    })
})
*/
