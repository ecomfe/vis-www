
(function(){
	
		window.addEventListener('scroll', changecolor);

	function changecolor() {
		var h3 =document.getElementsByTagName('h3');
		var bodytop = document.body.scrollTop || document.documentElement.scrollTop;
		var tocmenubig =document.getElementsByClassName('toc-level-2');
		var h2 =document.getElementsByTagName('h2');
		for(var i = 0; i < h2.length; i++){
			var h2top = h2[i].offsetTop 
			+ document.getElementsByClassName('article-title')[0].offsetTop
			+ document.getElementsByClassName('article-inner')[0].offsetTop
			-bodytop;
			
						
			if (h2top<=500){
				for(var j = 0; j < tocmenubig.length; j++){
					tocmenubig[j].className='toc-level-2';
					}
				tocmenubig[i].className='toc-level-2 toc-level-2-on';
			}
		}


		// for(var i = 0; i < h3.length; i++){
		// 	var h3top = h3[i].offsetTop 
		// 	+ document.getElementsByClassName('article-entry')[0].offsetTop
		// 	+ document.getElementsByClassName('article-inner')[0].offsetTop
		// 	-bodytop;
			
						
		// 	if (h3top<=110){
		// 		for(var j = 0; j < tocmenu.length; j++){
		// 			tocmenu[j].className='toc-level-3';
		// 			}
		// 		tocmenu[i].className='toc-level-3 toc-level-3-on';
		// 	}
		// 	else{
		// 		tocmenu[i].className='toc-level-3';
		// 	}
		// }

	}

	//控制左侧导航收起与展开

	//var Current = $(".recommend-current");
		//Current.parents('.item-box').find('.title').removeClass('title-on');

	$(".title" ).click(function() {
		var titleEl = $(this);

		titleEl.parents('.item-box').find('.dd-box').animate({
			height: "toggle",
			}, 100, function() {
			// Animation complete.
		});
		titleEl[
			titleEl.hasClass('title-on') ? 'removeClass' : 'addClass'
		]('title-on');
	});
	

})();

 
