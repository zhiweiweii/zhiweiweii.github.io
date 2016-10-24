$(document).ready(function(){
    //头部
    $("#header").mouseover(function(){
        $("#header_detail").show();
        $("#header1_mark").show();
    }).mouseout(function(){
        $("#header_detail").hide();
        $("#header1_mark").hide();
    });
    $("#header_detail").mouseover(function(){
       $(this).show();
        $("#header1_mark").show();
    }).mouseout(function(){
        $(this).hide();
        $("#header1_mark").hide();
    });
    //详情
    $("#header2_detail p").mouseover(function(){
        $(this).parent().find("div").css({"opacity":"0.9","filter":"alpha(opacity=90)"})
            .mouseout(function(){
                $(this).parent().find("div").css({"opacity":"0.6","filter":"alpha(opacity=60)"})
            });
    });
    $("#header2_detail div").mouseover(function(){
        $(this).css({"opacity":"0.9","filter":"alpha(opacity=90)"})
            .mouseout(function(){
                $(this).css({"opacity":"0.6","filter":"alpha(opacity=60)"})
            });
    });
    $(".version_detail p").mouseover(function(){
        $(this).parent().find("div").css({"opacity":"0.9","filter":"alpha(opacity=90)"})
            .mouseout(function(){
                $(this).parent().find("div").css({"opacity":"0.6","filter":"alpha(opacity=60)"})
            });
    });
    $(".version_detail div").mouseover(function(){
        $(this).css({"opacity":"0.9","filter":"alpha(opacity=90)"})
            .mouseout(function(){
                $(this).css({"opacity":"0.6","filter":"alpha(opacity=60)"})
            });
    });
    //图片轮播：
    var small_box=document.getElementById("img_lbSMALLBOX");
    var img_btn=document.getElementById("img_btn");
    var btns=img_btn.getElementsByTagName("div");
    var index=1;
    var animated=false;
    var offset=0;
    var overed=false;
    function animate(offset){
        animated=true;
        var time=30; //时间1s
        var interval=10; //10ms位移一次
        var speed=parseInt(offset)*interval/time;
        var newOffset=parseInt(small_box.offsetLeft)+parseInt(offset);
        function go(){
            if((speed<0&&parseInt(small_box.offsetLeft)>newOffset)||(speed>0&&parseInt(small_box.offsetLeft)<newOffset)){
                small_box.style.left=parseInt(small_box.offsetLeft)+speed+"px";
                setTimeout(go,interval);
            }else{
                animated=false;
                small_box.style.left=newOffset+"px";
                if(parseInt(small_box.offsetLeft)<-3900){
                    small_box.style.left="-780px";
                }
                if(parseInt(small_box.offsetLeft)>-780){
                    small_box.style.left="-3900px";
                }
            }
        }
        go();
    }
    function show_btn(){
        for(var i=0;i<btns.length;i++){
           if(btns[i].className=="btn_on"){
                btns[i].className="";
               break;
            }
        }
        btns[index-1].className="btn_on";
    }
    function LB(){
        if(animated==false){
            if(index==5){index=1}
            else{index++}
            animate(-780);
            show_btn();
        }
    }

        for(var i=0;i<btns.length;i++) {
            btns[i].onmouseover = function () {
                if(this.className!="btn_on") {
                    if(animated==false) {
                        clearInterval(timer);
                        offset = -780 * parseInt(this.getAttribute("index") - index);
                        animate(offset);
                        index = this.getAttribute("index");
                        show_btn();
                        timer=setInterval(LB,5000);
                    }
                }
            }
        }

    var timer=setInterval(LB,5000);
    small_box.onmouseover=function(){
        clearInterval(timer);
    }
    small_box.onmouseout=function(){
        timer=setInterval(LB,5000);
    }

    //新闻 公告处的Hover li的时间变色
    $("#news_body .news_content a").mouseover(function(){
        $(this).find(".news_time").css({"color":"#36AB87 "});
    }).mouseout(function(){
        $(this).find(".news_time").css({"color":"#A6A6A6"});
    });
    //新闻处的 选项卡功能
    $("#news_title div:not(:last-child)").mouseover(function(){
        if($(this).hasClass("news_on")){return;}
        else{
            $(this).parent().find("div").removeClass("news_on");
            $(this).addClass("news_on");
            $("#news_body").children().hide();
            $("#news_"+parseInt($(this).index()+1)).show();
        }
    });
    //视频中心
    $("#shipin_nav div").mouseover(function(){
        if($(this).hasClass("shipin_on")){return;}
        else{
            $(this).parent().find("div").removeClass("shipin_on");
            $(this).addClass("shipin_on");
            $("#shipin_content").children().hide();
            $("#shipin_content").children(":nth-child("+parseInt($(this).index()+1)+")").show();
        }
    });
    $("#shipin_footer").click(function (){
        $("#shipin_content").children().find(".second_show").show();
        $(this).html("进入视频中心查看更多");
    });
    $("#shipin_content li").mouseover(function(){
        $(this).find(".video_mark").show();
        $(this).find(".video_hover").show();
    }).mouseout(function(){
            $(this).find(".video_mark").hide();
            $(this).find(".video_hover").hide();
        }
    );

    //赛事中心的
    $("#saishi_nav div").mouseover(function(){
        if($(this).hasClass("saishi_on")){return;}
        else{
            $(this).parent().find("div").removeClass("saishi_on");
            $(this).addClass("saishi_on");
            $("#saishi_content").children().hide();
            $("#saishi_content").children(":nth-child("+parseInt($(this).index()+1)+")").show();
        }
    });
    //客服专区的
    $("#kefu_nav div").mouseover(function(){
        if($(this).hasClass("kefu_on")){return;}
        else{
            $(this).parent().find("div").removeClass("kefu_on");
            $(this).addClass("kefu_on");
            $("#kefu_content").children().hide();
            $("#kefu_content").children(":nth-child("+parseInt($(this).index()+1)+")").show();
        }
    });
    //英雄皮肤
    $("#hero_nav div").mouseover(function(){
        if($(this).hasClass("hero_on")){return;}
        else{
            $(this).parent().find("div").removeClass("hero_on");
            $(this).addClass("hero_on");
            $("#hero_content").children().hide();
            $("#hero_content").children(":nth-child("+parseInt($(this).index()+1)+")").show();
        }
    });
    $("#hero1 .hero1_cover,#skin .skin_cover").mouseover(function(){
        $(this).parent().find(".hero1_mark").show();
        $(this).parent().find(".hero1_text").show();
    }).mouseout(function(){
            $(this).parent().find(".hero1_mark").hide();
            $(this).parent().find(".hero1_text").hide();
    });
    $("#skin .skin_cover").mouseover(function(){
        $(this).parent().find(".skin_mark").show();
        $(this).parent().find(".skin_text1").show();
        $(this).parent().find(".skin_text2").show();
    }).mouseout(function(){
        $(this).parent().find(".skin_mark").hide();
        $(this).parent().find(".skin_text1").hide();
        $(this).parent().find(".skin_text2").hide();
    });
    $("#new_hero .new_hero_cover").mouseover(function(){
        $(this).parent().find(".new_hero_mark").show();
        $(this).parent().find(".new_hero_text1").show();
        $(this).parent().find(".new_hero_text2").show();
    }).mouseout(function(){
        $(this).parent().find(".new_hero_mark").hide();
        $(this).parent().find(".new_hero_text1").hide();
        $(this).parent().find(".new_hero_text2").hide();
    });
    //快速入口处
    $("#enter_content .enter_mark").mouseover(function(){
        $(this).parent().find(".enter_text").css({"color":"#36AB87"});
        $(this).parent().find("img").attr({"src":"img/enter_"+parseInt($(this).parent().parent().index()+1)+"1.png"});
    }).mouseout(function(){
            $(this).parent().find(".enter_text").css({"color":"#555555"});
        $(this).parent().find("img").attr({"src":"img/enter_"+parseInt($(this).parent().parent().index()+1)+".png"});
        }
    );
    //活动中心
    $("#activity_contentL .L_cover").mouseover(function(){
        $(this).parent().find(".L_explain").hide();
        $(this).parent().find(".L_mark").animate({top:0},200);
        $(this).parent().find(".L_mark_text").animate({top:0},200);
    }).mouseout(function(){
        $(this).parent().find(".L_explain").show();
        $(this).parent().find(".L_mark").animate({top:"173px"},200);
        $(this).parent().find(".L_mark_text").animate({top:"173px"},200);
    });
    //网页尾巴的下拉菜单
    $("#footer_1_R").click(function(e){
        $(this).find(".show_box").show();
        e.stopPropagation();
    });
    $("body").click(function(){
        $("#footer_1_R").find(".show_box").hide();
    });
    //视频弹出，覆盖层
    $("#video_show_mark").css({"height":$("body").height()+140});
    $("#header2_video .video_mark").click(function(){
        $("#video_show_mark").show();
        $("#video_show").show();
        $("#video_show video")[0].load();
        $("#video_show video")[0].play();
    });
    $("#video_show img").click(function(){
        $("#video_show_mark").hide();
        $("#video_show").hide();
        $("#video_show video")[0].pause();
    });


});
