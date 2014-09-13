/*
**	Scheduler Database
**
*/

// Include mongoose
var mongoose = require('mongoose');

// Create pending connection to test database
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

// Give notice if connection failed or was successful 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	
	// Define shift schema
	var shiftSchema = mongoose.Schema({
		week: 	String,
		day:  	String,
		start: 	String,
		end:    String,
		shiftIndex: Number
	});

	// Compile schema into a model
	var Shift = mongoose.model('Shift', shiftSchema);

	// TODO:
	// 	- Continue building shift model
	//  - Saving shift objects from shift array to the db with mongoose

});