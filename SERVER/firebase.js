var Firebase = require('firebase');

Firebase.initializeApp({
  databaseURL: "https://rimo-8666d.firebaseio.com"
});

var db = Firebase.database();
var ref = db.ref('power');

var exec = require('child_process').exec;
var command;

ref.on("value", function (snapshot){
	if(snapshot.val() == "true"){
	exec("irsend SEND_ONCE LIGHT_IR power");
	console.log(snapshot.val());
	} else {
	exec("irsend SEND_ONCE LIGHT_IR power");
	console.log(snapshot.val());
}
});
