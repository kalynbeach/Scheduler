/*
 * Scheduler
 * App View
 *
*/

var app = app || {};

(function($) {
	'use-strict';

	app.AppView = Backbone.View.extend({

		el: '.container',

		initialize: function() {
			this.$newShiftButton = this.$('#new-shift-button');
			this.$form = this.$('#new-shift-form');
			this.$week = this.$('#week');
			this.$day = this.$('#day');
			this.$start = this.$('#start-time');
			this.$end = this.$('#end-time');

		},

		gatherInputValues: function() {

		}



	});

})(jQuery);
