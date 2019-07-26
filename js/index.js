$(function () {
    function navCZ() {
        $(".nav_dv>ul>li").eq(0).css("backgroundColor", "#12b7f5");
        $(".nav_dv>ul>li").on("mouseenter", function () {
            $(this).css("backgroundColor", "#12b7f5").siblings().css("backgroundColor", "")
        });
        $(".nav_dv>ul").on("mouseleave", function () {
            $(this).children().css("backgroundColor", "");
            $(".nav_dv>ul>li").eq(0).css("backgroundColor", "#12b7f5")
        });
    }

    navCZ();

    function navShow() {
        if ($(window).scrollTop() >= 600) {
            $("#nav").css({
                position: "fixed",
                top: 0,
                backgroundColor: "#fff",
            })
            $(".nav_dv>ul>li").off();
            $(".nav_dv>ul").off();
            $(".nav_dv>ul>li").eq(0).css("backgroundColor", "")
        } else {
            $("#nav").css({
                position: "",
                backgroundColor: ""
            })
            navCZ();
        }
    }

    navShow();
    $(window).scroll(navShow);

    function show() {
        var img=$(".fourimbg>.fourimbg_cunter>.fl>ul>li>img");
        var tr=true;
        function f1(){
            if ($(window).scrollTop()>3500&&$(window).scrollTop()<4250){
                if (tr){
                    img.eq(0).animate({
                        "width":"120%",
                        "height":"120%"
                    },50,function () {
                        img.eq(0).animate({
                            "width":"100%",
                            "height":"100%"
                        },100,function () {
                            img.eq(1).animate({
                                "width":"120%",
                                "height":"120%"
                            },50,function () {
                                img.eq(1).animate({
                                    "width":"100%",
                                    "height":"100%"
                                },100,function () {
                                    img.eq(2).animate({
                                        "width":"120%",
                                        "height":"120%"
                                    },50,function () {
                                        img.eq(2).animate({
                                            "width":"100%",
                                            "height":"100%"
                                        },100)
                                    })
                                })
                            })
                        })
                    })
                    tr=false
                }
            }else {
                img.css({width:0,height:0});
                tr=true;
            }
        }
        f1();
        $(window).scroll(f1);
        $(window).scroll(function () {
            console.log($(window).scrollTop())
        })
    }
    var time=setTimeout(function () {
        show();
        clearInterval(time);
    },1000);
    $(".botom_center>.fl>ul>li>a").on("mouseover",function () {
        $(this).find("p").css("color","#12b7f5");
        $(this).parent().siblings().find("p").css("color","#979797")
        $(this).css("background-position-y", "-93px")
        $(this).parent().siblings().find("a").css("background-position-y","0px")
    })
    $(".botom_center>.fl>ul>li>a").on("mouseout",function () {
        $(this).find("p").css("color","#979797");
        $(this).css("background-position-y","0px")
    })
})
