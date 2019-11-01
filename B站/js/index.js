
$(document).ready(function(){
	// 电梯主内容标题完整显示
	$('.lift-row .icon-l-item a').on({
		mouseover: function(){
			$(this).children(".num, .play, .danmu").stop().slideUp().siblings(".t").addClass("t-hover");
		},
		mouseout: function(){
			$(this).children(".num, .play, .danmu").stop().slideDown().siblings(".t").removeClass("t-hover");
		}
	});

	// 下拉菜单
	$(".dropdown").parent().on({
		mouseenter: function(){
			$(this).children(".dropdown").stop().fadeIn().siblings("a").addClass("current");
		},
		mouseleave: function(){
			$(this).children(".dropdown").stop().fadeOut().siblings("a").removeClass("current");
		}
	});

	//轮播图

	var flag = true;
	var num = 0;
	var width = $(".carousel-box").width();
	$(".circle li").each(function(i,ele){
		$(ele).on("click",function(){
			var index = $(this).index();
			$(this).parent().siblings("ul").stop().animate({
				marginLeft: -1 * width*index + "px"
			});
			num = index;
			console.log(-1 * width*index + "px");
		});
	});

	$(".arrow-l").on("click",function(){
		if(flag){
			flag = false;
			if (num <= 0) {
				$(this).siblings("ul").css({
					marginLeft: -4 * width + "px"
				});
				console.log(-4 * width);
				num=4;
			}
			num--;
			$(this).siblings("ul").stop().animate({
				marginLeft: -1 * width*num + "px"
			},function(){
				flag = true;
			});
		}
	});

	$(".arrow-r").on("click",function(){
		if(flag){
			flag = false;
			if (num >= 4) {
				$(this).siblings("ul").css({
					marginLeft: 0 * width + "px"
				});
				console.log(0 * width);
				num=0;
			}
			num++;
			$(this).siblings("ul").stop().animate({
				marginLeft: -1 * width*num + "px"
			},function(){
				flag = true;
			});
		}
	});

	var timer = setInterval(function(){
		$(".arrow-l").trigger("click");
	},3000);
	
	$(".carousel-box").on({
		mouseover: function(){
			clearInterval(timer);
			timer = null;
		},
		mouseout: function(){
			timer = setInterval(function(){
				$(".arrow-l").trigger("click");
			},3000);
		}
	});
});
