/*
 * Scheduler
 * Server
 *
*/

/*
**	Module dependencies
*/

var express	= require('express'),
		mongoose	= require('mongoose'),
		path = require( 'path' ),
		application_root = __dirname;

// Create Server
var app = express();

// Where to serve static content
app.use(express.static(path.join(application_root)));
app.use(express.static(__dirname + '/less'));

/*
**  Routes
*/

app.get( '/api', function(req, res) {
  res.send('API is running');
});

// Get a list of all shifts
app.get('/api/shifts', function(req, res) {
	return ShiftModel.find(function(err, shifts) {
		if (!err) {
			return res.send(shifts)
		} else {
			return console.log(err);
		}
	});
});

// Insert a new shift
app.post('/api/shifts', function(req, res) {
	var shift = new ShiftModel({
		week: req.body.week,
		day: req.body.day,
		start: req.body.start,
		end: req.body.end
	});

	return shift.save(function(err) {
		if (!err) {
			console.log('Created.');
			return res.send(shift);
		} else {
			return console.log(err);
		}
	});
});

// Get a single shift by id
app.get('/api/shifts/:id', function(req, res) { // Colon notation for Express dynamic route
	return ShiftModel.findById(req.params.id, function(err, shift) {
		if (!err) {
			return res.send(shift);
		} else {
			return console.log(err);
		}
	});
});

// Update a shift
app.put('api/shifts/:id', function(req, res) {
	console.log('Updating shift ' + req.body.day);
	return ShiftModel.findById(req.params.id, function(err, shift) {
		shift.week = req.body.week;    // Set shift property values equal to request (updated) values
		shift.day = req.body.day;
		shift.start = req.body.start;
		shift.end = req.body.end;

		return book.save(function(err) {
			if (!err) {
				console.log('shift updated');
			} else {
				console.log(err);
			}
		});
	});
});

// Delete a shift
app.delete('/api/shifts/:id', function(req, res) {
	console.log('Deleting shift with id: ' + req.params.id);
	return ShiftModel.findById(req.params.id, function(err, shift) {
		return shift.remove(function(err) {
			if (!err) {
				console.log('Shift removed');
				return res.send('');
			} else {
				console.log(err);
			}
		});
	});
});

// Connect to database
mongoose.connect('mongodb://kalynbeach:Kkbeach93@proximus.modulusmongo.net:27017/ynyBab6y');

/*
**  Schemas
*/

var Shift = new mongoose.Schema({
	week: String,
	day: String,
	start: String,
	end: String
});

var Schedule = new mongoose.Schema({

});

/*
**	Models
*/

var ShiftModel = mongoose.model('Shift', Shift)

// Run the server on port 8080
app.listen(8080, function() {
	console.log('Listening on port %d in %s mode', 8080, app.settings.env);
});