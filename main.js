/*
**	Scheduler
**
**	An app for keeping track of a weekly work schedule along with total hours worked
**	
**	TODO:
**  - Function: create new shift object from gatherInputValues() values
**	- Add Shift button, it needs to:
**		- Locate the proper div in the DOM based on the week and day values
**		- Display the start time and end time values in the located div
*/

// ==========================
//	Objects and Construction
// ==========================

// Shift Constructor
var Shift = function(week, day, start, end) {
	this.week = week;
	this.day = day;
	this.start = start;
	this.end = end;

	this.returnShift = function() {
		return this;
	}
};

// Array of shift objects
var shifts = [];

//
// ====================================
//

// ================
//	Main Functions 
// ================


// Create shift object from gatherInputValues() values
function createShift(week, day, start, end) {
	var shift = new Shift(week, day, start, end);
  shifts.push(shift);
};

// Gather form input values
function gatherInputValues() {

		var options = $('input[name=options]'); // Radio button elements

		var week;
		var day;
		var start;
		var end;

	// Gather radio button value (week selected)
	function gatherWeekValue() {
		for (var i = 0; i < options.length; i++) {
			if (options[i].checked) {
				week = options[i].value;
				break;
			}
		};
		return week;
	};

	// Gather day value from form input
	function gatherDayValue() {
		$('#day option:selected').each(function() {
			day = $(this).val();
			return false;
		});
		return day;
	};

	// Gather start time value from form input
	function gatherStartValue() {
		$('#start-time option:selected').each(function() {
			start = $(this).val();
			return false;
		});
		return start;
	};

	// Gather end time value from form input
	function gatherEndValue() {
		$('#end-time option:selected').each(function() {
			end = $(this).val();
			return false;
		});
		return end;
	};

	// Call gather functions
	gatherWeekValue();
	gatherDayValue();
	gatherStartValue();
	gatherEndValue();

	// Call createShift function on newly returned values
	createShift(week, day, start, end);

	console.log("Week of shift: " + week);
	console.log("Day of shift: " + day);
	console.log("Start time: " + start);
	console.log("End time: " + end);
};

// Console.log() a shift object's values
function logShift(week, day) {

};

// Find proper html element to display values in
function displayShift(shift) {

};

//
// ====================================
//


// ==================================
//	jQuery DOM control / interaction 
// ==================================

$(document).ready(function() {

	// Add Shift button behavior
	$('#new-task-form').submit(function() {

		gatherInputValues();

		return false;
	});

}); 
// End of document.ready

//
// ====================================
//

// =========
//	Testing
// =========



//
// ====================================
//



