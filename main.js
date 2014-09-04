/*
**	Scheduler
**
**	An app for keeping track of a weekly work schedule along with total hours worked
**	
**	TODO:
**	- Work on gatherInputValues() function, so far it gathers week value, next is day value
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

/*
* jQuery DOM control / interaction
*/

$(document).ready(function() {

	// Add Shift button behavior
	$('#new-task-form').submit(function() {

		// Create JavaScript object from form input
		$('#new-task-form [id]').each(function() {
			shift[this.id] = this.value;
		});


		return false;
	});

}); 
// End of document.ready

/*
* Value gathering code
*/

function gatherInputValues() {

		var options = $('input[name=options]'); // Radio button elements

		var week;
		var day;
		var startTime;
		var endTime;

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
			startTime = $(this).val();
			return false;
		});
		return startTime;
	};

	// Gather end time value from form input
	function gatherEndValue() {
		$('#end-time option:selected').each(function() {
			endTime = $(this).val();
			return false;
		});
		return endTime;
	};



	gatherWeekValue();
	gatherDayValue();
	gatherStartValue();
	gatherEndValue();
	console.log("Week of shift: " + week);
	console.log("Day of shift: " + day);
	console.log("Start time: " + startTime);
	console.log("End time: " + endTime);
};

/*========================================
**========================================
*/



/*
*		Testing
*/

/*function gatherWeekValue() {
		var options = $('input[name=options]');
		var week;

		for (var i = 0; i < options.length; i++) {
			if (options[i].checked) {
				week = options[i].value;
				break;
			}
		};
		return week;
	};
*/

function gatherDayValue() {
	$('#day-select option:selected').each(function() {
		day = $(this).val();
		return false;
	});
	return day;
};



