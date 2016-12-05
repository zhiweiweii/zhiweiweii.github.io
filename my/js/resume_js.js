window.onload=function(){
    //头像从上到下移动结束
    var flag_move=false;
    //确认是否能点击
    var flag=false;
    //头像从上到下
    var index_logo=document.getElementById("index");
    var clientH=document.documentElement.clientHeight;
    function index_animate(){
        var time=800;  //时间1s
        var y=(clientH/2);  //位移的距离
        var interval=10; //间隔时间
        var distance=parseInt(interval*y/time);
        var t;
        index_logo.style.top = index_logo.offsetTop + distance + "px";
        if(index_logo.offsetTop+150<y){
            t=setTimeout(index_animate, interval);
        }
        else{
            clearTimeout(t);
            flag_move=true;
        }
    }
    index_animate(); //运动
    //信息
    $("#motto").fadeIn(1500,function(){
        $("#simple_information p:nth-child(1)").animate({"top":"10px"},300,function(){
            $("#simple_information p:nth-child(2)").animate({"top":"40px"},300,function(){
                $("#simple_information p:nth-child(3)").animate({"top":"70px"},300,function(){flag=true;$("#page").show()});
            });
        });
    });

    //头像改变
    $("#index_img2").fadeOut();
        $("#index_img").hover(function () {
            if(flag_move==true) {
                $("#index_img2").fadeIn(1300);
                $(this).fadeOut(200);
                $("#index").css({"border": "2px solid pink"});
            }
        });
        $("#index_img2").mouseout(function () {
            if(flag_move==true) {
                $("#index_img").fadeIn(1300);
                $(this).fadeOut(200);
                $("#index").css({"border": "none"});
            }
        });
    //点击Index页面
    var index_back=document.getElementById("index_back");
    var info=document.getElementById("information");
    index_back.onclick=function(){
        if(flag==true){
        $(this).fadeOut(3000);
            this.style.background="none";
            info.style.display="none";
            $("#index").addClass("scale");
        }
    }
    //自动切换界面
    function autoindex(){    
        $("#index_back").fadeOut(3000);
            info.style.display="none";
            $("#index").addClass("scale"); 
        //个人信息栏运动一次
        setTimeout(1500,function(){
            for(var i=0;i<4;i++){
                info_move($("#basic_information").find("img")[i]);
            }
        });
    }
    setTimeout(autoindex,5000);
    //头部右边
    $("#header_right ul li").mouseover(function(){
            $(this).css({"border-bottom":"2px solid #33CCFF"});
    }).mouseout(function(){$(this).css({"border-bottom":"none"});});
    $("#header_right ul li:first-child").click(function(){
        window.open("resume.html","个人简历");
    });


    //个人信息动画效果
    $("#basic_information").find("img").each(function(){
        $(this)[0].timer=null;
    });
    $("#basic_information").find(".mark").mouseover(function(){
            var i=parseInt($(this).parent().index())+1;
            $(this).parent().find("img").attr("src","img/"+i+".gif");
            info_move($(this).parent().find("img")[0]);
        }).mouseout(function(){
            var i = parseInt($(this).parent().index()) + 1;
        $(this).parent().find("img").attr("src", "img/" + i + "_1.gif");
    });
    $(".text_information").find("ul").each(function(){
        $(this).mouseover(function(){
            var i=parseInt($(this).index())+1;
            $(this).parent().parent().find("img")[i-1].src="img/"+i+".gif";
            info_move($(this).parent().parent().find("img")[i-1]);
        }).mouseout(function(){
            var i = parseInt($(this).index()) + 1;
            $(this).parent().parent().find("img")[i-1].src="img/" + i + "_1.gif";
        });
    });
    function info_move(obj) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var L1 = obj.offsetTop;
                if (L1 <= -200) {
                    L1 = 280
                }
                ;
                obj.style.top = L1 - 8 + "px";
                if (obj.offsetTop == 0) {
                    obj.style.top = "2px";
                    clearInterval(obj.timer);
                }
            }, 10)
        }
    

    //skill的放大缩小
    $(".wenjian").mouseover(function(){
        $(this).removeClass("wj_scale2");
        $(this).addClass("wj_scale1");
    }).mouseout(function(){
        $(this).removeClass("wj_scale1");
        $(this).addClass("wj_scale2");
    });
    //点击skill
    $(".wenjian").click(function(e){
        var i=parseInt($(this).parent().index())+1;
        if($(this).parent().children(":nth-child(3)").find("img").attr("src")=="img/xiangxia.gif"){
            $(this).parent().children(":nth-child(3)").find("img").attr("src","img/xiangshang.gif");
            $("#show_div div:nth-child("+i+")").slideUp();
        }else{
            $("#skill_middle").each(function(){
                $(this).children().children(":nth-child(3)").find("img").attr("src","img/xiangshang.gif");
            });
            $("#show_div div").each(function(){{
                $(this).slideUp();
            }});
            $(this).parent().children(":nth-child(3)").find("img").attr("src","img/xiangxia.gif");
            $("#show_div div:nth-child("+i+")").slideDown();
        }
        e.stopPropagation();
    });
    $("body").click(function(){
        $("#show_div div").slideUp();
        $(".wenjian").parent().children(":nth-child(3)").find("img").attr("src","img/xiangshang.gif");
    });
    $("#show_div div").click(function(e){
        $(this).show();
        e.stopPropagation();
    });

    //个人作品处
    $(".mark2").mouseover(function(){
        $(this).parent().children(":nth-child(2)").stop(true,false).animate({top:0},200);
    }).mouseout(function(){
        $(this).parent().children(":nth-child(2)").stop(true,false).animate({top:"100px"},200)
    });
    $("#production_middle a").click(function(){
        $(this).children().find(".show").hide();
    });

}


