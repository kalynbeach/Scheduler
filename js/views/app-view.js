/*
 * Scheduler
 * App View
 *
*/

var app = app || {};

(function($) {
	'use-strict';

	app.AppView = Backbone.View.extend({

		// AppView main element to latch on to
		el: '.container',

		events: {
			'click #add-shift-button': 'createShift'
		},

		// Cache jQuery objects
		initialize: function() {
			this.$newShiftButton = this.$('#new-shift-button');
			this.$form = this.$('#new-shift-form');
			this.$week = this.$('#week');
			this.$day = this.$('#day');
			this.$start = this.$('#start-time');
			this.$end = this.$('#end-time');
			this.$daySection = this.$('.day-section');

			this.listenTo(app.schedule, 'add', this.addShift);

			//app.schedule.fetch({reset: true});
		},

		// Gather input values from #new-shift-form
		inputValues: function() {
			return {
				week: this.$week.children('.active').children().val(),
				day: this.$day.val(),
				start: this.$start.val(),
				end: this.$end.val()
			};
		},

		// Create shift view and append to its proper .day-section
		addShift: function(shift) {
      var view = new app.ShiftView({model: shift});
      view.render().el;
		},

		// Create new shift model in the schedule collection from form input values
		createShift: function(e) {
			app.schedule.create(this.inputValues());
			e.preventDefault();
		}



	});

})(jQuery);
