//GNB관련
window.onload = function() {
	var menuRight = document.getElementById( 'graviti-menu-s2' ),
		showRightPush = document.getElementById( 'showRightPush' ),
		body = document.body;

	showRightPush.onclick = function() {
		console.log('t');
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
		console.log($('.sidemenu').css('display'));
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
