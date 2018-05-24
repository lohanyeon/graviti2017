function disableOther( button ) {
	if( button !== 'showRightPush' ) {
		classie.toggle( showRightPush, 'disabled' );
	}
}

function closeGnb() {
	var menuRight = document.getElementById( 'graviti-menu-s2' );
	var showRightPush = document.getElementById( 'showRightPush' );
	var body = document.body;
	var form = document.myform;

	//classie.toggle( this, 'active' );
	classie.toggle( body, 'graviti-menu-push-toleft' );
	classie.toggle( menuRight, 'graviti-menu-open' );
	disableOther( 'showRightPush' );

	form.work.value = 'all'
	form.from_detail.value = 'menu'

	this.$cookies.set('click-count-more', 1)
	this.$cookies.set('pid', 0)
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


	/* work view over */
	$(".other-portfolio li.next").mouseover(function(){
		$(this).addClass("over");
	});
	$(".other-portfolio li.next").mouseleave(function(){
		$(this).removeClass("over");
	});

	/* work select box click */
	$('.wrapper.work header .group_m .text a').click(function() {
		$('.wrapper.work header .group_m select').click();
		return false;
	});
});
