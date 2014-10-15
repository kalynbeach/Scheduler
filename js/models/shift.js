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
	  },

	  defaults: {
	  	week: '',
	  	day: '',
	  	start: '',
	  	end: ''
	  }

	});

	var shift1 = new app.Shift();

	console.log(JSON.stringify(shift1));

})();

