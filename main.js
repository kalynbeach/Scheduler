/*
**	Scheduler
**
**	An app for keeping track of a weekly work schedule along with total hours worked
**	
**	TODO:
**	- Work on Add Shift button behavior, it needs to:
**		- Create a shift object with the inputted values
**		- Locate the proper div in the DOM based on the #week-select and #day-select values
**		- Display the #start-time-select and end-time-select values in the located div
*/

// var date = new Date();


// Shift Constructor
var Shift = function(week, day, start, end) {
	this.week = week;
	this.day = day;
	this.start = start;
	this.end = end;
};

// example shift object
var shift = {}

// createShift function
function createShift() {

};


// jQuery DOM control / interaction
$(document).ready(function() {

	// Add Shift button behavior
	$('#new-task-form').submit(function() {

		// Create JavaScript object from form input
		$('#new-task-form [id]').each(function() {
			shift[this.id] = this.value;
		});


		return false;
	});

}); // End of document.ready










