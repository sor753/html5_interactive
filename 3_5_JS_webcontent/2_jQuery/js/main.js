// JavaScript Document

$(document).ready(function(){
	
	// ページ表示の演出
	$("#main")
		.css({opacity:0})
		.animate({opacity:1}, 1000, "linear");
		
		
	$("#btnTop")
		.css({top:-30, opacity:0})
		.delay(500)
		.animate({top:0, opacity:1}, 1000, "easeOutExpo");
		
	$("#btnAbout")
		.css({top:-30, opacity:0})
		.delay(600)
		.animate({top:0, opacity:1}, 1000, "easeOutExpo");
		
	$("#btnSample")	
		.css({top:-30, opacity:0})
		.delay(700)
		.animate({top:0, opacity:1}, 1000, "easeOutExpo");
	
	$("#content")
			.css({left:-90, top:-100 });
	
	// ナビゲーションボタンクリックの演出
	$("#btnTop").click(function(){
		var p = $("#pageTop").position();
		movePage(p);
	});
	
	$("#btnAbout").click(function(){
		var p = $("#pageAbout").position();
		movePage(p);
	});
	
	$("#btnSample").click(function(){
		var p = $("#pageSample").position();
		movePage(p);
	})
	
	// ボタンのインタラクション
	$("#btnTop, #btnAbout, #btnSample").hover(function(){
		$(this).animate({opacity:0.8 }, 200)
	}, function(){
		$(this).animate({opacity:1.0 }, 200)
	});
});

function movePage(position){
	$("#imgBg")
		.stop()
		.animate({left:-position.left, top:-position.top }, 2700, "easeInOutExpo");
		
	$("#info")
		.stop()
		.animate({left:-position.left + 100, top:-position.top + 100 }, 2500, "easeInOutExpo");
}