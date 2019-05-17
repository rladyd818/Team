$(document).ready(function(){
	$("#mobile_menu_btn").click(function(){
		$("#mobile_menu").css("right","0");
		function showMenu(){
			$("#mobile_menu").css("-webkit-clip-path","polygon(0 0, 100% 0%, 100% 100%, 0% 100%)");
			$("#mobile_menu_btn").animate({right:'-100'},300);
		}
		setTimeout(showMenu,100);
	});
	$("#close").click(function(){
		$("#mobile_menu").css("-webkit-clip-path","polygon(100% 0, 100% 0%, 100% 100%, 0 100%)");
		function hideMenu(){
			$("#mobile_menu").css("right","-300px");
			$("#mobile_menu_btn").animate({right:'50'},300);
		}
		setTimeout(hideMenu,300);
	function originalLayout(){
		$("#mobile_menu").css("-webkit-clip-path","polygon(0 0, 100% 0, 100% 100%,100% 100%)");
	}
setTimeout(originalLayout,600);
});
});