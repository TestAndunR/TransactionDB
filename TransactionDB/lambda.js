let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS.undefined(connectionManager);
exports.handler = function (event, context, callback) {

	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'trasnsactDB'
	}, function (error, connection) {
		if (error) { throw err; }
	});


	callback(null, 'Successfully executed');
}