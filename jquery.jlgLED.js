(function($) {
	'use strict';

	function _jlgLED(el, options) {
		this.$el = $(el);
		this.options = options;
		this.init = false;
		this._generate();
	}


	_jlgLED.prototype = {
		_generate: function() {
			this._setOptions();
			this.$el.addClass("jlg-LED");
			this.$ledSpan = $("<span></span>");
			this.$el.append(this.$ledSpan);

			if((this.options.color !== "") && (this.options.colorClasses.hasOwnProperty(this.options.color))) {
				this.$el.addClass(this.options.colorClasses[this.options.color]);
			}

			this.init = true;
		},
		
		destroy: function() {
			this.$ledSpan.remove();
			$.removeData(this.$el, "jlgLED");
		},
		
		_setOptions: function() {
			var opt, func;

			for(opt in this.options) {
				this.options[opt] = this.$el.attr("data-" + opt) || this.options[opt];
				func = "set" + opt.charAt(0).toUpperCase() + opt.substring(1);

				if(this[func]) {
					this[func](this.options[opt]);
				}
			}
		},

		setColor: function(color) {
			this.getClear();

			if(this.options.colorClasses.hasOwnProperty(color)) {
				this.options.color = color;
				$(this.$el).addClass(this.options.colorClasses[color]);
			}
		},
		
		getClear: function() {
			if(this.hasOwnProperty("$errorDiv")) {
				this.getClearError();
			}

			for(var c in this.options.colorClasses) {
				$(this.$el).removeClass(this.options.colorClasses[c]);
			}
		},
		
		getError: function() {
			if($(this.$el).is(":visible")) {
				var oldColor = this.options.color;
				this.setColor("orange");
				this.options.color = oldColor;
				this.$errorDiv = $('<div class="jlg-LED-ERROR"></div>');
				$(this.$el).parent().append(this.$errorDiv);

				var o = $(this.$el).offset();
				$(this.$errorDiv).offset(o); 
			}
		},
		
		getClearError: function() {
			if(this.hasOwnProperty("$errorDiv")) {
				$(this.$errorDiv).remove();
				$.removeData(this, "$errorDiv");
				delete this.$errorDiv;
			}
			this.setColor(this.options.color);
		}
	};

	$.fn.jlgLED = function(options, value) {
		function get() {
			var LED = $.data(this, "jlgLED");

			if(!LED) {
				LED = new _jlgLED(this, $.extend(true, {}, options));
				$.data(this, "jlgLED", LED);
			}

			return LED;
		}

		if(typeof options === "string") {
			var LED;
			var values = [];
			var func = (value !== undefined ? "set" : "get") + options.charAt(0).toUpperCase() + options.substring(1);

			var setOpt = function() {
				if(LED[func]) {
					LED[func].apply(LED, [value]);
				}
				
				if(LED.options[options]) {
					LED.options[options] = value;
				}
			};

			var getOpt = function() {
				if(LED[func]) {
					return LED[func].apply(LED, [value]);
				} else if(LED.options.hasOwnProperty(options)) {
					return LED.options[options];
				} else {
					return undefined;
				}
			};

			var runOpt = function() {
				LED = $.data(this, "jlgLED");

				if(LED) {
					if(LED[options]) {
						LED[options].apply(LED, [value]);
					} else if(value !== undefined) {
						setOpt();
					} else {
						values.push(getOpt());
					}
				}
			};

			this.each(runOpt);

			return values.length ? (values.length === 1 ? values[0] : values) : this;
		}

		options = $.extend({}, $.fn.jlgLED.defaults, options);

		return this.each(get);
	};

	
	$.fn.jlgLED.defaults = {
		colorClasses: {
			green: "greenLED",
			yellow: "yellowLED",
			red: "redLED",
			orange: "orangeLED",
			blue: "blueLED"
		},
		color: ""
	};

})(jQuery);