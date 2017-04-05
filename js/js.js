$(function() {
	//图片轮播
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	});

	var time = 1;
	$("#con-main ul").each(function(index) {
		$("#con-btn").click(function() {
			if(time == 1) {
				$("#con-main ul").find("li").show();
				$(this).html("点击收起")
				time = 2;
			} else if(time == 2) {
				$("#con-main ul").find("li:gt(2)").hide();
				$(this).html("点击加载更多");
				time = 1;
			}
		})
	})

	//跑马灯
	function srcoll() {
		$("#myul li:first").animate({
			"margin-top": "-0.6rem"
		}, 500, function() {
			$(this).css({
				"margin-top": "0.2rem"
			}).appendTo("#myul");
		});
	}
	setInterval(srcoll, 2000)

	//切换
	$(".con-mainall .con-main:gt(0)").hide();
	$("#con-top ul").find("li").each(function(index) {
		$(this).hover(function() {
			$(this).addClass("hover").stop(true, true).siblings().removeClass("hover");
			$(".con-mainall .con-main").hide().eq(index).show();
		});
	});

});

$(function() {
	//下拉列表
	var flag = true;
	$(".xiala_plan").hide();
	$(".sec-plan .xiala").click(function() {
		if(flag) {
			$(".xiala_plan").slideDown();
			flag = false;
		} else {
			$(".xiala_plan").slideUp();
			flag = true;
		}
	});
	//侧边栏
	var flag = true;
	$("#top-asd").click(function() {
		if(flag) {
			$("#asd-animate").animate({
				"right": "0rem",
			}, 500);
			$("#artile").animate({
				right: "2.94rem",
			}, 500);
			$("#top-asd").attr("src", "images/ico_btn2.png");
			flag = false;
		} else {
			$("#asd-animate").animate({
				right: "-2.94rem",
			}, 500);
			$("#artile").animate({
				right: "0rem",
			}, 500);
			$("#top-asd").attr("src", "images/ico_btn2_hov.png");
			flag = true;
		}
	});
	//左边导航栏
	var akk = 1;
	$("#pelletwindow1").hide();
	$("#pelletwindow").click(function() {
		if(akk == 1) {
			$("#pelletwindow1").show();
			$("#pelletwindow").attr("src", "images/ico_btn23.png")
			akk = 2;
		} else if(akk == 2) {
			$("#pelletwindow1").hide();
			$("#pelletwindow").attr("src", "images/ico_btn22.png")
			akk = 1;
		}
	});
	//弹窗计时器
	function app(){
		$("#tanchuan").show();
		$("#bg").show();
	}
	var timer=setInterval(app,5000)

	$("#tanchuan").hide();
	$("#iphone").click(function() {
		$("#tanchuan").show();
		$("#bg").show();

	});

	$("#tanchuan-img").click(function() {
			$("#tanchuan").hide();
			$("#bg").hide();
			clearInterval(timer);
		
		})
		//回到顶部
	$("#top").click(function() {
		//		$(window).scrollTop(0)
		$("body").animate({
			"scrollTop": "0"
		})
	})
	$("#footer ul li").each(function(){
		$(this).click(function(){
			$(this).addClass("hov").siblings().removeClass("hov");
		})
	})
	
	
	
});