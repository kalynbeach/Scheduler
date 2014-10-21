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

			this.collection = new app.Schedule();
			this.collection.fetch({reset: true}); // Fetch existing models from the server
			this.render();

			this.listenTo(this.collection, 'add', this.addShift);
			this.listenTo(this.collection, 'reset', this.render); // Re-render when API interaction occurs
		},

		render: function() {
      this.collection.each(function(shift) {
      	this.addShift(shift);
      }, this);
		},

		// Create new shift model in the schedule collection from form input values
		createShift: function(e) {
      e.preventDefault();

      // Gather input values and assign the object of values to a var
			var inputData = this.inputValues();

			var newShift = new app.Shift(inputData);
			this.collection.add(newShift);

			newShift.save();

      console.log(inputData);
			this.logCollection();
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

		// Console.log the AppView's collection
		logCollection: function() {
			console.log(this.collection);
		},

		// jQuery .slideToggle() on the input form
		toggleNewShiftForm: function() {
			this.$form.slideToggle();
		}

	});

})(jQuery);
