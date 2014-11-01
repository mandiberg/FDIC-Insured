$(function(){
	var scroller = buildScroller();
	function resizeScroller(){
		scroller.destroy();
		scroller = buildScroller();
	};
	$(window).resize(debounce(resizeScroller, 500, false));

});

function buildScroller(){
	var iw = g.constants.ITEM_WIDTH
	$('#content').width(Math.floor($(window).width() / iw) * iw);

	return new Scroller($(g.constants.SCROLLER), {
			dataPath: g.constants.DATA_PATH,
			template: 'bank',
			itemWidth: g.constants.ITEM_WIDTH
	});
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
