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

	  localStorage: new Backbone.LocalStorage('scheduler')


	});

	app.schedule = new Schedule();

})();

