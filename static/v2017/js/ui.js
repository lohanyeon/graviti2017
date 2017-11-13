//GNB관련
window.onload = function() {
	var menuRight = document.getElementById( 'graviti-menu-s2' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;

	showRightPush.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'graviti-menu-push-toleft' );
		classie.toggle( menuRight, 'graviti-menu-open' );
		disableOther( 'showRightPush' );

		/* console.log(this);
		console.log($(this).find('img').attr('src')); */
		if ($(this).attr('class') == 'active') {
			$(this).find('img').attr('src','/static/v2017/images/menu_icon_blue.png');
		} else {
			$(this).find('img').attr('src','/static/v2017/images/menu_icon.png');
			$(this).find('img').attr('src','/static/v2017/images/menu_icon_blue.png');
		}

		//$('.copy').css('display', 'block');
		$('.copy-over').css('display', 'none');
		$('.more-portfolio').css('display', 'none');
	};
}

function disableOther( button ) {
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
}

function closeGnb() {
	var menuRight = document.getElementById( 'graviti-menu-s2' );
	var showRightPush = document.getElementById( 'showRightPush' );
	var body = document.body;

	//classie.toggle( this, 'active' );
	classie.toggle( body, 'graviti-menu-push-toleft' );
	classie.toggle( menuRight, 'graviti-menu-open' );
	disableOther( 'showRightPush' );
}

//메인 포토폴리오 롤링 관련
$(document).ready(function() {

	setBodyHeight();

	initMoveDown();

	autoRolling();

	/* 사이드 메뉴 show, hide */
	$('#sidemenu').click(function() {
		//console.log($('.sidemenu').css('display'));
		$('.sidemenu').css({
			top: 0,
			left: $('.wrapper').width()
		}).stop().animate({
			left: $('.wrapper').width() - $('.sidemenu').width()
		}, 500, 'easeOutQuint', function() {
			console.log('oopen');
		});
	});

	/* 배경 이미지 롤링 */
    $('.copyright ul li:eq(2)').click(function() {
    	moveUp();
    });

	$('.copyright ul li:eq(3)').click(function() {
    	moveDown();
    });


	//메뉴 레이어  over이미지 마우스오버, 아웃 시
	$('.copy .over a').mouseover(function() {
		$('.copy').css('display', 'none');
    	$('.copy-over').css('display', 'block');
	});
	$('.copy-over').mouseout(function() {
		$('.copy-over').css('display', 'none');
    	$('.copy').css('display', 'block');
	});

});

function autoRolling() {
	setInterval(moveDown, 5000);
}

function moveUp() {

	changeText('up');

	//백그라운드 이미지 상하 롤링
	var count = $('#slider ul').find('li').length;
	$('#slider ul').append($('#slider ul').find('li').eq(0)).promise().done(function() {
    	$('#slider ul li').eq(count-1).css({
    		top: $('.wrapper').height()
    	}).stop().animate({
    		top: 0
    	}, 500, 'easeOutQuint', function() {
    	});
	});
}

function moveDown() {

	//clearText();
	changeText('down');

	var count = $('#slider ul').find('li').length;
	//$('#slider ul').prepend($('#slider ul').find('li').eq(count-1));


	var orgLiIdx = count-2;
	$('#slider ul').append($('#slider ul').find('li').eq(orgLiIdx)).promise().done(function() {
		$('#slider ul li').eq(count-1).css({
    		top: $('.wrapper').height() * -1
    	}).stop().animate({
    		top: 0
    	}, 500, 'easeOutQuint').promise().done(function() {
    		$('#slider ul').prepend($('#slider ul').find('li').eq(orgLiIdx));
    	});
	});

}

function initMoveDown() {
	changeText('init');

	var count = $('#slider ul').find('li').length;

	$('#slider ul li').eq(count-1).css({
		top: $('.wrapper').height() * -1
	}).stop().animate({
		top: 0
	}, 500, 'easeOutQuint').promise().done(function() {
	});
}

function changeText(key) {
	//왼쪽 바코드
	$('.main .main_barcode').css({
		left: $('.main .main_barcode').width() * -1
	}).stop().animate({
		left: 0
	}, 1000, 'easeOutQuint');

	//오른쪽 프로젝트명 텍스트
	var txtCount = $('.main .main_title').length;
	var currIdx = 0;
	$('.main .main_title').each(function(idx) {
		if ($(this).hasClass('on'))
			currIdx = idx;
	});
	$('.main .main_title').eq(currIdx).removeClass('on');
	if (key == 'up') {
		currIdx = (txtCount-1) == currIdx ? 0 : currIdx+1;
	} else if (key == 'down') {
		//currIdx = (txtCount-1) == currIdx ? 1 : currIdx-1;
		if ((txtCount-1) == currIdx) {
			currIdx = 1;
		} else {
			if (currIdx == 0) {
				currIdx = txtCount-1;
			} else {
				currIdx = currIdx-1;
			}
		}
	} else if (key == 'init') {
		currIdx = currIdx;
	}

	$('.main .main_title').eq(currIdx).addClass('on');
	$('.main .main_title').eq(currIdx).css({
		left: $('.main .main_title').eq(currIdx).width()
	}).stop().animate({
		left: 0
	}, 1000, 'easeOutQuint');
}

function setBodyHeight() {

	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var docHeight = $(document).height();

	if (windowHeight < docHeight) {
		//$('.wrapper').css('width', windowWidth);
		$('.wrapper').css('height', docHeight + 40);
	}
}

/**
* work 관련 js
*/
$(function() {
	//my.morePortfolio();
	s.gnb();
});
var my = {
	morePortfolio:function() {
		var none = $('.more-portfolio').css('display');
		var h = $('body').height()
		console.log(none);
		if (none == 'none') {
			$('.more-portfolio').insertAfter('.contents');
			$('.more-portfolio').css('display', 'block');
		}
		$('html, body').animate({scrollTop : h}, 150);
		this.setTextInfoHeight();
	},
	setTextInfoHeight:function() {
		var h = $('.more-portfolio .text-info').height();
		console.log(h);
		//$('.more-portfolio .text-info').css('height', h+100);
	}
}

var s = {
	gnb:function() {
		var $win = $(window);
		var top = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.

		/*사용자 설정 값 시작*/
		var speed = 500; // 따라다닐 속도 : "slow", "normal", or "fast" or numeric(단위:msec)
		var easing = 'linear'; // 따라다니는 방법 기본 두가지 linear, swing
		var $layer = $('.cloud-gnb'); // 레이어 셀렉팅
		var layerTopOffset = 0; // 레이어 높이 상한선, 단위:px
		//$layer.css('position', 'relative').css('z-index', '1');
		/*사용자 설정 값 끝*/

		// 스크롤 바를 내린 상태에서 리프레시 했을 경우를 위해
		if (top > 0 )
			$win.scrollTop(layerTopOffset+top);
		else
			$win.scrollTop(0); //스크롤이벤트가 발생하면

			//console.log($('.header').height(), $('.contents article').height(), $('.more-portfolio .text-info').height());

		$(window).scroll(function() {
			var h = $('.header').height() + $('.contents article').height() + $('.more-portfolio .text-info').height();

			yPosition = $win.scrollTop() - h; //이부분을 조정해서 화면에 보이도록 맞추세요

			//console.log($('.header').height(), $('.contents article').height(), $('.more-portfolio .text-info').height());
			//console.log(yPosition, $win.scrollTop(), h);

			if (yPosition < 0) {
				yPosition = 0;
				$layer.css('position', 'relative');
			} else {
				$layer.css('position', 'fixed').css('top', '0px').css('opacity', '0.9');
			}
			//$layer.animate({"top":yPosition }, {duration:speed, easing:easing, queue:false});
		});
	}
}


$(function(){
	/* sub main over */
	$(".sub_cont .contR a.btn_over").mouseover(function(){
		$(".sub_cont .contR .on").css("display","none");
		$(".sub_cont .contR .over").css("display","block");
	});
	$(".sub_cont .contR .over").mouseleave(function(){
		$(".sub_cont .contR .over").css("display","none");
		$(".sub_cont .contR .on").css("display","block");
	});

	/* work list over */
	$(".wrapper.work header .group li a").mouseover(function(){
		$(this).parent().addClass("over");
	});
	$(".wrapper.work header .group li a").mouseleave(function(){
		$(this).parent().removeClass("over");
	});
});
