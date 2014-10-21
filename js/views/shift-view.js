/*
 * Scheduler
 * Shift View
 *
*/

var app = app || {};

(function($) {
	'use-strict';

	app.ShiftView = Backbone.View.extend({

		el: function() {
			return this.getEl();
		},

		template: _.template($('#shift-template').html()),

		events: {
			'click .delete-button': 'deleteShift'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.clear);
		},

		render: function() {
			// Prevent double render from localStorage
			/*if (this.model.changed.id !== undefined) {
				return;
			}*/

			this.$el.children('.display-section').html(this.template(this.model.toJSON()));
			return this;
		},

		// Return appropriate parent element id
		getEl: function() {
			var day = this.model.get('day');
			var week = this.model.get('week');
			var id;

			if (week === 'This Week') {
     		id = '#this-';
			} else if (week === 'Next Week') {
				id = '#next-';
			}

			var ele = id + day.toLowerCase();
			return ele;
		},

		// Delete Shift Model
		deleteShift: function() {
			this.model.destroy();
		},

		clear: function() {
			this.$el.children('.display-section').html('');
		},

		// Edit Shift
		editShift: function() {

		}

		



	});

})(jQuery);
