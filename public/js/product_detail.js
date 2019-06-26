$(function(){
    /*--------------------按钮切换滚动图功能------------------*/
    //右按钮
    var $leftBtn=$("#btn_prev");
    //console.log($leftBtn);
    var $leftImg=$("#leftIMG");
    //左按钮
    var $rightBtn=$("#btn_next");
    var $rightImg=$("#rightIMG");
    //console.log($rightBtn);
    //移动框
    var $ul_banner=$("ul.ul_banner");
    var moved=0;
    //获取初始src的值，左
    var $srcLeft1=$leftImg.attr("src");
    //获取初始src的值，右
    var $srcRight1=$rightImg.attr("src");
    //获取切换data-btn的值，左
    var $srcLeft2=$leftImg.attr("data-btn");
    //获取切换data-btn的值
    var $srcRight2=$rightImg.attr("data-btn");
    //向右移动moved++,向左移动moved--,每次移动146.71px。变动的是margin-left，不移动时为0，有移动是负值。
    $rightBtn.click(function(){
        var $this=$(this);
        if($this.is(":not(.disabled)")){
            moved++;
            //每当右按钮点击，修改左按钮状态属性，disabled=false;
            $leftBtn.prop("disabled",false);
            //左改成可点击图片
            $leftImg.attr("src",$srcLeft2);
            //执行移动
            $ul_banner.css("margin-left",moved*-148);
            if(moved==(9-4)){
                //右改成不可点击图片
                $rightImg.attr("src",$srcRight2);
                $this.prop("disabled",true);

            }
        }
    })
    $leftBtn.click(function(){
        var $this=$(this);
        if($this.is(":not(.disabled)")){
            moved--;
            //每当右按钮点击，修改左按钮状态属性，disabled=false;
            $rightBtn.prop("disabled",false);
            $rightImg.attr("src",$srcRight1);
            $ul_banner.css("margin-left",moved*-146.71);
            if(moved==0){
                $this.prop("disabled",true);
                $leftImg.attr("src",$srcLeft1);
            }
        }
    })
    /*--------------------鼠标悬停切换md功能------------------*/
    var $img_md=$("#img_md");
    $ul_banner.on("mouseenter","li>img",function(){
        $img_sm=$(this);
        //获取小图片data-md中的中图片路径
        var src=$(this).attr("data-md");
        $img_md.attr({src});
    })
    /*--------------------放大镜------------------*/
    /*--------------------鼠标悬停位置为mark功能------------------*/
    var $mark=$("#mark");
    var $supermark=$("#supermark");
    var $lg_img=$("#lg_img");
    var mark=40;
    //鼠标进入$supermark，$mark、$lg_img显示，移出消失。$mark随鼠标移动而移动，移不出$supermark
    $supermark.mouseenter(function(){
        $mark.css("display","block");
        $lg_img.css("display","block");
    }).mouseleave(function(){
        $mark.css("display","none");
        $lg_img.css("display","none");
    }).mousemove(function(e){
        var left=e.offsetX-mark/2;
        var top=e.offsetY-mark/2;
        if(left<0){
            left=0;
        }else if(left>160){
            left=160;
        }
        if(top<0){
            top=0;
        }else if(top>160){
            top=160;
        }
        $mark.css({left,top});
        $lg_img.css("background-position",`${-left*15}px ${-top*15}px`)
    })
    //点击同意，可购买
    var $chb=$(".font3>p>input");
    var $btn=$(".font_btn")
    $chb.click(function(){
        $chb=$(this);
        //console.log($chb)
        if($chb.prop("checked")==true){
            $btn.prop("disabled",false)
        }else{
            $btn.prop("disabled",true)
        }
    })
    //根据地址栏取pid值
    var pid=location.search.split("=")[1];
    if(pid!==undefined){
        //ajax传参
        $.ajax({
            url:"http://localhost:3000/product/details",
            type:"get",
            data:{pid},
            dataType:"json",   
            success:function(result){
                //var {product}=result
                //var {pname,details,price}=result;
                //console.log(result[0]);
                $("#p_name").html(result[0].pname);
                $("#p_details").html(result[0].details);
                $("#p_price").html(`￥${result[0].price.toFixed(2)}`);
                $("#p_price1").html(`￥${result[0].price.toFixed(2)}`);
                $("#p_price2").html(`￥${result[0].price.toFixed(2)}`);
            }
        })
        
    }


    

})
