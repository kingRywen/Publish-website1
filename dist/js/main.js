$(document).ready(function(){function e(e){$(".slider-wrapper .navgation li").each(function(){$(this).removeClass("active"),$(this).index()==e-1&&$(this).addClass("active")})}var i=1,n=$("#nav"),t=$("<ul></ul>");t.append(n.find("#nav-list").html()),$("#nav-mobile").append(t),$(".nav-mobile").click(function(){"none"==$("#nav-mobile").css("display")?($("#nav-mobile").slideDown(),$("body,html").css("overflow","hidden"),$(this).find("i").html("&#xe622;")):($("#nav-mobile").slideUp(),$("body,html").css("overflow","auto"),$(this).find("i").html("&#xe8cc;"))}),$("#nav .sub-li").on("mouseenter",function(){$(this).find(".sub-menu").stop(!1,!0).slideDown(200)}).on("mouseleave",function(){$(this).find(".sub-menu").stop(!1,!0).slideUp(200)}),$(".rec").on("mouseenter",function(){var e;switch($(this).index()){case 0:e="&#xe673;";break;case 1:e="&#xe663;";break;case 2:e="&#xe698;";break;case 3:e="&#xe671;"}$(this).find("i").html(e)}).on("mouseleave",function(){var e;switch($(this).index()){case 0:e="&#xe672;";break;case 1:e="&#xe662;";break;case 2:e="&#xe699;";break;case 3:e="&#xe670;"}$(this).find("i").html(e)}),e(i),$(".slider-wrapper .arrow-r").click(function(){var n=$(this).prev(".slider-body").find(".slider-div"),t=n.find(".slider-box").length;i>t-2?(n.stop(!0,!0).animate({left:0},100),e(i=1)):(n.stop(!0,!0).animate({left:-(n.find(".slider-box").width()+20)*i+"px"},100),e(++i))}),$(".slider-wrapper .arrow-l").click(function(){var n=$(this).next(".slider-body").find(".slider-div");1==i?(n.stop(!0,!0).animate({left:2*-(n.find(".slider-box").width()+20)+"px"},100),e(i=3)):(e(i-1),i--,n.stop(!0,!0).animate({left:-(n.find(".slider-box").width()+20)*(i-1)+"px"},100))}),$(".slider-wrapper .navgation li").click(function(){var n=$(this).parents().find(".slider-div");i=$(this).index()+1,e($(this).index()+1),n.stop(!0,!0).animate({left:-(n.find(".slider-box").width()+20)*(i-1)+"px"},100)});var o=$(".flow-wrapper"),l=o.find(".flow-scroll").find(".flow-container");l.width()>o.width()?l.after(l.clone()):l.after(l.clone()).after(l.clone()).after(l.clone());var s=setInterval(function(){o.scrollLeft()>=l.width()?o.scrollLeft(0):o.scrollLeft(o.scrollLeft()+1)},10);$(".flow-wrapper").on("mouseenter",function(){clearInterval(s)}).on("mouseleave",function(){s=setInterval(function(){o.scrollLeft()>=l.width()?o.scrollLeft(0):o.scrollLeft(o.scrollLeft()+1)},10)}),$(".countdown").on("mouseenter",function(){$(".deadline-wrapper").stop(!0,!0).slideDown()}).on("mouseleave",function(){$(".deadline-wrapper").stop(!0,!0).slideUp()});setInterval(function(){$(document).scrollTop()>=300?$("#top").fadeIn(200):$("#top").fadeOut(200)},20);$("#top a").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},200)})});