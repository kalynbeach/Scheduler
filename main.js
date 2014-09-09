/*
**	Scheduler
**
**	An app for keeping track of a weekly work schedule
**	
**	TODO:
**  - Need to make Add Shift button call all needed functions for the newly added shift object
**	- Add Shift button, it needs to:
**		- DONE: Locate the proper div in the DOM based on the week and day values
**		- DONE: Display the start time and end time values in the located div
*/

// ==========================
//	Objects and Construction
// ==========================

// Array of shift objects
var shifts = [];

// Shift object Constructor
var Shift = function(week, day, start, end) {
	this.week = week;
	this.day = day;
	this.start = start;
	this.end = end;

	// Return the shift
	this.returnShift = function() {
		return this;
	};

	// Call displayShift function on the shift
	this.addToSchedule = function() {
		displayShift(this);
	};

	// Remove the shift from the shifts array
	this.deleteShift = function() {
		shifts.splice(this, 1);
	};

	this.logShift = function() {
		console.log("Week of shift: " + this.week);
		console.log("Day of shift: " + this.day);
		console.log("Start time: " + this.start);
		console.log("End time: " + this.end);
	}
};

//
// ====================================
//

// ================
//	Main Functions 
// ================


// Create shift object from gatherInputValues() values 
// == function needs to be cleaned up and separated ==
function createShiftObject(week, day, start, end) {
	var shift = new Shift(week, day, start, end);
  shifts.push(shift);

  // Display shift by adding it to the DOM
  displayShift(shift);
};

// Gather form input values
function gatherInputValues() {

		// Radio button elements
		var options = $('input[name=options]'); 

		// Value variables
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

	// Call createShiftObject function on newly returned values
	createShiftObject(week, day, start, end);

};

// Console.log() a shift object's values
function logShift(shift) {
	console.log("Week of shift: " + shift.week);
	console.log("Day of shift: " + shift.day);
	console.log("Start time: " + shift.start);
	console.log("End time: " + shift.end);
};

// Find proper div to display values in, then insert values into the div
function displayShift(shift) {

	// Assign shift values to vars
	var week  = shift.week;
	var day   = shift.day;
	var start = shift.start;
	var end   = shift.end;

	// Div locations
	var weekDiv;
	var timesDiv;

	// Select proper week div
	switch (week) {
		case "This Week":
			weekDiv = "#this-week-section";
			break;
		case "Next Week":
			weekDiv = "#next-week-section";
			break;
	};

	// Select proper day div
	if (weekDiv === "#this-week-section") {
		switch (day) {
			case "Monday":
				timesDiv = "#this-mon-times";
				break;
			case "Tuesday":
				timesDiv = "#this-tue-times";
				break;
			case "Wednesday":
				timesDiv = "#this-wed-times";
				break;
			case "Thursday":
				timesDiv = "#this-thu-times";
				break;
			case "Friday":
				timesDiv = "#this-fri-times";
				break;
			case "Saturday":
				timesDiv = "#this-sat-times";
				break;
			case "Sunday":
				timesDiv = "#this-sun-times";
				break;
		}
	}	else if (weekDiv === "#next-week-section") {
		switch (day) {
			case "Monday":
				timesDiv = "#next-mon-times";
				break;
			case "Tuesday":
				timesDiv = "#next-tue-times";
				break;
			case "Wednesday":
				timesDiv = "#next-wed-times";
				break;
			case "Thursday":
				timesDiv = "#next-thu-times";
				break;
			case "Friday":
				timesDiv = "#next-fri-times";
				break;
			case "Saturday":
				timesDiv = "#next-sat-times";
				break;
			case "Sunday":
				timesDiv = "next-sun-times";
				break;
		}
	}

	// Insert time strings to the proper div
	$(timesDiv).text(start + " - " + end);
	
};

//
// ====================================
//


// ==================================
//	jQuery DOM control / interaction 
// ==================================

$(document).ready(function() {

	// Add Shift button 
	$('#new-shift-form').submit(function(e) {

		gatherInputValues();

		// Toggle form back up after submit
		$(this).slideToggle();

		// Prevent default submitting action on load
		e.preventDefault();

		//return false;
	});

	// New Shift button
	$('#new-shift-button').click(function() {

		// Toggle new shift form down
		$('#new-shift-form').slideToggle();
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



