var menu = $('.navbar');
$(window).scroll(function () {
	var y = $(this).scrollTop();
	var z = $('.carousel-indicators').offset().top-400;

	if (y >= z) {
		menu.removeClass('not-visible-nav');
	}
	else{
		menu.addClass('not-visible-nav');
	}
});


var myGZH_flag=0;
function gongzhonghao(){
	$("#myGZH").modal('show');
}
 
$('#myGZH').on('hide.bs.modal', function () {
	var r=confirm('已经添加微信公众号了吗？(*^__^*) 嘻嘻……');
	if (r==true)
	{
		alert("谢谢!爱你哦~~");
		myGZH_flag=0;
	}
	else
	{
		alert("加一下吧，真的很好玩的");
		myGZH_flag=1;
	}
})

$('#myGZH').on('hidden.bs.modal', function () {
	if(myGZH_flag==1)
	{gongzhonghao();}
})

$("#nino-navbar-collapse .dropdown-menu a").click(function(){
	var href=$(this).attr("href");
	$("#myTab a[href='" + href + "']").tab("show");
})

setTimeout(function(){
	$('#preloader').css('display','none');	
},1000);

$('body').scrollspy({ 
	target: '#nino-navbar-collapse',
	offset: 95
})

