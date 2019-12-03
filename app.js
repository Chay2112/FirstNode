var AWS = require("aws-sdk");
AWS.config.loadFromPath("./config.json");

var ec2 = new AWS.EC2();
ec2.describeInstances(function (err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else     
	        data.Reservations.forEach(function(obj) {
	           obj.Instances.forEach( function(instance) {
			   console.log(instance.PublicIpAddress);
		   });
		});
});
