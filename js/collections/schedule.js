/*
 * Scheduler
 * Schedule Collection
 *
*/

var app = app || {};

(function() {
	'use-strict';

	var Schedule = Backbone.Collection.extend({

	  model: app.Shift,

	  url: '/api/shifts',

	  localStorage: new Backbone.LocalStorage('scheduler')


	});

	app.schedule = new Schedule();

})();

