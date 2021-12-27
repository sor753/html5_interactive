// JavaScript Document

$(document).ready(function () {

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

	var old = "showTop";
	// ナビゲーションボタンクリックの演出
	$("#btnTop").click(function () {
		$("#content").addClass("showTop").removeClass(old);
		old = "showTop";
	});

	$("#btnAbout").click(function () {
		$("#content").addClass("showAbout").removeClass(old);
		old = "showAbout";
	});

	$("#btnSample").click(function () {
		$("#content").addClass("showSample").removeClass(old);
		old = "showSample";
	})

	// ボタンのインタラクション
	$("#btnTop, #btnAbout, #btnSample").hover(function () {
		$(this).animate({opacity:0.8 }, 200)
	}, function () {
		$(this).animate({opacity:1.0 }, 200)
	});
});
