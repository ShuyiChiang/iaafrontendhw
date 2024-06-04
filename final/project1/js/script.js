//JavaScript Document
//滑鼠游標
$("a").on("mouseenter", handleMouseOver).on("mouseleave", handleMouseOut);

function handleMouseOver() {
  $("body").addClass("hover");
}

function handleMouseOut() {
  $("body").removeClass("hover");
}

//漢堡選單
$(document).ready(function(){	
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});
	
    //resize
    $(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); 
        else $("nav").hide();
	});

});

// JavaScript代码来处理导航栏的透明度
let prevScrollPos = window.pageYOffset; // 获取初始滚动位置

window.addEventListener("scroll", function() {
	const currentScrollPos = window.pageYOffset; // 获取当前滚动位置

	if (currentScrollPos > prevScrollPos) { // 向下滚动
		document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // 设置半透明背景色
		document.querySelector("nav").style.borderBlockColor = "rgba(255, 255, 255, 0)"; 
	} else { // 向上滚动
		document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 1)"; // 设置黑色背景色
		document.querySelector("nav").style.borderBlockColor = "rgba(255, 255, 255, 1)"; 
	}

	prevScrollPos = currentScrollPos; // 更新前一个滚动位置
});



document.querySelectorAll("a[href^='#']").forEach(anchor => {
anchor.addEventListener("click", function(e) {
	e.preventDefault();

	const targetId = this.getAttribute("href").substring(1); // 获取目标元素的ID
	const targetElement = document.getElementById(targetId); // 获取目标元素

	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: "smooth" // 平滑滚动效果
		});
	}
});
});

