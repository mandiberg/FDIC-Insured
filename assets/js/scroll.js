window.Scroller = (function(){
		// usage:
		// new Scroller( $jquery_container, function(page){ return path_to_page });
		//
		var Scroller = function($container, options){
			var self = this;
			this.$el = $container;
			this.options = options;
			this.chunk = 1;
			this.last_chunk = false;
			this.dataPath = options.dataPath
			this.entry_c = 1;
			this.entry_i = 0;
			this.column_c = parseInt($container.width() / options.itemWidth);
			this.column_i = 0;
			this.current_row = null;
			this.fetching = false;
			this.listView = new infinity.ListView(this.$el, {
				lazy: function(){
								self.renderChunk();
							}
			});
			this.renderChunk();

		};

		Scroller.prototype.renderChunk = function(data){
			var self = this;
			this.withNextEntry( function(entry){
				if( self.column_i++ === 0) {
					self.current_row = $('<div class="row">');
				}
				self.current_row.append( $(g.tmpl(self.options.template)(entry)) );
				if( self.column_i === self.column_c - 1 ){
					self.listView.append(self.current_row);
					self.column_i = 0;
				} else {
					self.renderChunk();
				}
			//if( !self.last_chunk ){
			//	self.renderChunk();
			//	}
			});
		};
		Scroller.prototype.withNextEntry = function(cb){
			var self = this;
			if (this.entry_c === this.entry_i + 1 && !this.fetching ) {
				this.getNextCollection(function(){
					cb(self.getNextEntry());
				});
			} else {
				cb(this.getNextEntry());
			}
		};
		Scroller.prototype.getNextEntry = function(){
			var e = this.collection[this.entry_i++];
			return e;
		};

		Scroller.prototype.destroy = function(){
			this.listView.remove()
		};

		Scroller.prototype.getNextCollection = function(cb){
			var self = this;
			this.fetching = true;
			if(this.last_chunk){
				return false;
			}
			$.ajax({
				url: this.dataPath(this.chunk++),
				success: function(data){
					self.fetching = false;
					self.collection = data;
					self.entry_c = data.length;
					self.entry_i = 0;
					cb();
				},
				error: function(){
					self.last_chunk = true;
				}
			});
		};
		return Scroller;
})()

