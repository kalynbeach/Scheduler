/*
**	Scheduler
**
**	An app for keeping track of a weekly work schedule
**	
**	TODO:
**	- Saving to DB
**	- Exporting as text file
**
*/

// ===================================
//	Constructor and prototype methods
// ===================================

"use strict";

// Array of shift objects
var shifts = [];

// Shift object Constructor
var Shift = function(week, day, start, end) {
	this.week 	= week;
	this.day 		= day;
	this.start 	= start;
	this.end 		= end;

	// Shift object's index within the shifts array
	this.shiftIndex = '';
};

// Splice the shift from the shifts array
Shift.prototype.removeShift = function() {
	shifts.splice(this, 1);
};

// Log the shift's property values to the console
Shift.prototype.logShift = function() {
	console.log("Week of shift: " + this.week);
	console.log("Day of shift: " + this.day);
	console.log("Start time: " + this.start);
	console.log("End time: " + this.end);
};


//
// ====================================
//

// ================
//	Main Functions 
// ================

//
// Create shift object from gatherInputValues() values 
// TODO: cleaned up and separate concerns
//
function createShiftObject(week, day, start, end) {

	// Create new Shift object
	var shift = new Shift(week, day, start, end);

	// Append shift to shifts array
  shifts.push(shift);

  // Assign the shift's shiftIndex property equal to its index in the shifts array
  shift.shiftIndex = shifts.indexOf(shift);

  // Display shift by adding it to the DOM
  displayShift(shift);
};

function deleteShift(shiftIndex) {
	shift[shiftIndex].removeShift();
};

// 
//	Gather form input values
//
function gatherInputValues() {

	// Radio button elements
	var options = $('input[name=options]'); 

	// Value variables
	var week,
			day,
			start,
			end;

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

//
// Find proper div to display values in, then insert values into the div
//
function displayShift(shift) {

	// Assign shift values to vars
	var week  = shift.week;
	var day   = shift.day;
	var start = shift.start;
	var end   = shift.end;
	
	// Div locations
	var weekDiv;
	var timesDiv;

	// Unique name for the shift
	var shiftIndex = shift.shiftIndex;

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
				timesDiv = "#next-sun-times";
				break;
		}
	}

	// Insert time strings to the proper div
	$(timesDiv).text(start + " - " + end);

	// Create data-shiftIndex attribute on the element that links the text to its shift object
	$(timesDiv).data('shiftindex', shiftIndex);
	console.log("From Add Shift: " + shiftIndex);
};

//
// ====================================
//


// ==================================
//	jQuery DOM control / interaction 
// ==================================

$(document).ready(function() {

	//
	// Add Shift button 
	//
	$('#new-shift-form').submit(function(e) {

		gatherInputValues();

		// Toggle form back up after submit
		$(this).slideToggle();

		// Prevent default submitting action on load
		e.preventDefault();

		//return false;
	});

	//
	// New Shift button
	//
	$('#new-shift-button').click(function() {

		// Toggle new shift form down
		$('#new-shift-form').slideToggle();
	});

	//
	//	Delete Shift button
	//
	$(".delete-button").click(function() {

		// Delete shift object from shifts array
		var divShiftIndex = $(this).siblings('.times-section').data('shiftindex');
		
		// Log for debugging
		console.log("From Delete Shift: " + divShiftIndex);

		// Splice shift object from shifts array
		shifts.splice(divShiftIndex, 1);
		
		// Remove time text from div
		$(this).siblings('.times-section').text('');


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



