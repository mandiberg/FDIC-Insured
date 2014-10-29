window.Scroller = (function(){
		var Scroller = {}
		Scroller.initialize =  function(){
			var $scroller = $(g.constants.SCROLLER);

			$.ajax({ 
					url: Scroller.dataPath(1),
					success: function(json){
							Scroller.renderChunk(json, $scroller);
					}
			});
			Scroller.setupScroll($scroller);
		};
		Scroller.dataPath = function(page){
			return "assets/datafile_" + page + ".json"
		};
		Scroller.setupScroll = function($container){
			$container.infinitescroll({
				debug: true,
				animate: true,
				dataType: 'json',
				appendCallback: false,
				navSelector: "#nextDataFile",
				nextSelector: '#nextDataFile',
				path: Scroller.dataPath
			}, function(json, opts) {
				var page = opts.state.currPage;
				Scroller.renderChunk(json, $container);
			});
		};
		Scroller.renderChunk = function(data, $container){
			_.each(data, function(child){
				$container.append( g.tmpl('bank')(child) );
			})
		};
		return Scroller;
})()

