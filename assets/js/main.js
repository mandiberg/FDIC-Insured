$(function(){
	var dataPath = function(page){
		return "assets/datafile_" + page + ".json"
	}
	var ITEM_WIDTH = 272;
	$('#content').width(Math.floor($(window).width() / ITEM_WIDTH) * ITEM_WIDTH);

	new Scroller($('#fdic-banks'), {
			dataPath: dataPath,
			template: 'bank',
			itemWidth: ITEM_WIDTH
	});

});

