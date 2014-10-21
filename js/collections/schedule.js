/*
 * Scheduler
 * Schedule Collection
 *
*/

var app = app || {};

(function() {
	'use-strict';

	app.Schedule = Backbone.Collection.extend({

	  model: app.Shift,

	  url: '/api/shifts'

	});

})();

