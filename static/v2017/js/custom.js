$(function() {
	var stageW;
	var stageH;
	var maxW = 1200;
	var maxH = 780;
	var isios=(/(iphone)/i).test(navigator.userAgent);//ios
	var isandroid=(/android/i).test(navigator.userAgent);//android
	
	$(window).resize(function() {
		
		stageW = $(this).width();
		stageH = $(this).height();
		//maxW = $('.inner').width();
		//console.log(stageW + " : " + menuposX)
		
		//visual_setting
		if (isios || isandroid) {
			$('.wrapper').css({'width':'100%','height':maxH});					
			$('.wrapper .bg').css({'width':$('.contents').width(),'height':$('.contents').height()});
			$('.wrapper .bg').find('li.on').css({'width':'100%'});
		} else {
			$('.wrapper').css({'width':(stageW < maxW ? maxW : stageW),'height':(stageH < maxH ? maxH : stageH)});
			$('.contents .bg').css({'width':$('.wrapper').width(),'height':$('.wrapper').height()});
			$('.contents .bg').find('li.on').css({'width':'100%'});
			if (stageW >= 1600){
				$('.contents .bg img').css({'width':'100%','height':'100%'});
			} else {
				$('.contents .bg img').css({'width':'1600px','height':'100%'});
			}

		}
			
	}).resize();
	
});