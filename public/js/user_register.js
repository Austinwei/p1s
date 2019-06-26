//检查注册用户名是否为空，是否已存在，
var isUname=false;
function checkUname(){
    if(!uname.value){
        unameMSG.innerHTML=`<span style=
        "color:#dc3545;">用户名不能为空</span>`;
        isUname=false;
        return;
    }
    /*
    $.ajax({
        url:"http://localhost:3000/user/checkuname",
        type:"get",
        data:{uname},
        dataType:"json",
        success:function(result){
            console.log(result);
            if(result=="0"){
                $("#unameMSG").html(`<span style=
                "color:#28a745;">用户名可用</span>`);
                isUname=true;
            }else{
                $("#unameMSG").html(`<span style=
                "color:#dc3545;">用户名被占用</span>`);
                isUname=false;
            }
        }
    })
    */
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            console.log(result);
            if(result=="0"){
                unameMSG.innerHTML=`<span style=
                "color:#28a745;">用户名可用</span>`;
                isUname=true;
            }else{
                unameMSG.innerHTML=`<span style=
                "color:#dc3545;">用户名被占用</span>`;
                isUname=false;
            }
        }
    }
    xhr.open("get","/user/checkuname?uname="+uname.value,true);
    xhr.send(null);
}
console.log(isUname)
//检查注册密码是否为空，是否一致
var isUpwd=false;
function checkUpwd1(){
    if(!upwd1.value){
        upwd1MSG.innerHTML=`<span style=
        "color:#dc3545;">密码不能为空</span>`;
        upwd2MSG.innerHTML="";
        isUpwd=false;
        return;
    }else{
        upwd1MSG.innerHTML="";
    }
    //密码格式正则表达式
    /*
    var upwdReg=/\w{6,18}/;
    if(!upwdReg.test(upwd1.value)){
        upwd1MSG.innerHTML=`<span style=
        "color:red;font-weight:bold">密码格式错误</span>`;
        isUpwd=false;
        return;
    }else{
        upwd1MSG.innerHTML="";
    }
    */
    //改动upwd1也会影响.innerHTML提示
    if(upwd1.value==upwd2.value){
        upwd2MSG.innerHTML=`<span style=
        "color:#28a745;">密码一致</span>`;
        isUpwd=true;
    }else{
        if(!upwd2.value){
            upwd2MSG.innerHTML=`<span style="color:#dc3545;">请再次输入密码</span>`;
        }else{
            upwd2MSG.innerHTML=`<span style="color:#dc3545;">密码不一致</span>`;
        }
        isUpwd=false;
    }
}
//改动upwd2会影响.innerHTML提示
function checkUpwd2(){
    if(upwd1.value==upwd2.value){
        if(!upwd1.value){
            upwd2MSG.innerHTML="";
            //isUpwd=false;
        }else{
            upwd2MSG.innerHTML=`<span style="color:#28a745;">密码一致</span>`;
            isUpwd=true;
        }
    }else{
        if(!upwd2.value){
            upwd2MSG.innerHTML=`<span style="color:#dc3545;">请再次输入密码</span>`;
        }else{
            upwd2MSG.innerHTML=`<span style="color:#dc3545;">密码不一致</span>`;;
        }
        isUpwd=false;
    }
}
console.log(isUpwd);
//检查注册手机号是否为空，格式是否正确
var isPhone=false;
function checkPhone(){
    if(!phone.value){
        phoneMSG.innerHTML=`<span style=
        "color:#dc3545;">手机号不能为空</span>`;
        isPhone=false;
        return;
    }
    //手机号格式正则表达式
    var phoneReg=/^1[3-8]\d{9}$/;
    if(!phoneReg.test(phone.value)){
        phoneMSG.innerHTML=`<span style=
        "color:#dc3545;">手机号格式错误</span>`;
        isPhone=false;
    }else{
        phoneMSG.innerHTML=`<span style=
        "color:#28a745;">手机号可用</span>`;
        isPhone=true;
    }
}
console.log(isPhone)
//检查注册邮箱是否为空，格式是否正确
var isEmail=false;
function checkEmail(){
    if(!email.value){
        emailMSG.innerHTML=`<span style=
        "color:#dc3545;">电子邮箱不能为空</span>`;
        isEmail=false;
        return;
    }
    //邮箱正则表达式
    var emailReg=/^[A-Za-z0-9]\w*@[A-Za-z0-9]{2,5}[.](com|cn|net)$/;
    if(!emailReg.test(email.value)){
        emailMSG.innerHTML=`<span style=
        "color:#dc3545;">电子邮箱格式错误</span>`;
        isEmail=false;
    }else{
        emailMSG.innerHTML=`<span style=
        "color:#28a745;">电子邮箱可用</span>`;
        isEmail=true;
    }
}
console.log(isEmail);
//检查能否注册，如果能就完成注册
var isRegister=false;
function register(){
    console.log(isUname);
    //当条件必须全部满足时可创建ajax异步对象，否则提示不能注册
    if(isUname==true && isUpwd==true && isPhone==true && isEmail==true){
        isRegister=true;
    }else{
        isRegister=false;
        alert("对不起，无法注册");
        return;
    }
    /*
    if(!isRegister){
        alert("对不起，无法注册");
        return;
    }
    */
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var result=xhr.responseText;
            console.log(result);
            //成功后重新加载页面：location.reload(); 
            //成功后自动跳转首页，不可后退：location.replace("url");
            alert("恭喜您，注册成功");
            location.replace("homepage.html");        
        }
    }
    xhr.open("post","/user/register",true);
    var formdata="uname="+uname.value+"&upwd="+upwd1.value+"&sex="+sex.value+"&phone="+phone.value+"&email="+email.value;
    console.log(formdata);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}
