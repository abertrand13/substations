$(document).ready(function() {
	var db = new Firebase('https://substations.firebaseio.com');

	db.on("value", function(snapshot) {
		var data = snapshot.val();
		
		$('.substation').css("color", function() {
			if(data[this.id]  && data[this.id] > 0) {
				// substation is occupied
				return "green";
			}
			else {
				// substation is unoccupied	
				return "red";
			}
		});
	}, function(errorObject) {
		console.log("error ocurred");	
	});	
});
