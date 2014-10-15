/*
 * Scheduler
 * Shift Model
 *
*/

var app = app || {};

(function() {
	'use-strict';

	app.Shift = Backbone.Model.extend({

	  initialize: function() {
	  	console.log('This model has been initialized.');
	  	this.logShift();
	  },

	  defaults: {
	  	week: '',
	  	day: '',
	  	start: '',
	  	end: ''
	  },

	  logShift: function() {
	  	console.log('Week: ' + this.attributes.week);
	  	console.log('Day: ' + this.attributes.day);
	  	console.log('Start Time: ' + this.attributes.start);
	  	console.log('End Time: ' + this.attributes.end);
	  }

	});

})();

