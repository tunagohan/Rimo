
var config = {
    apiKey: "AIzaSyDwk4syHlJQWrryb-WXU8FW7RB7JXufmtE",
    authDomain: "rimo-8666d.firebaseapp.com",
    databaseURL: "https://rimo-8666d.firebaseio.com/",
    storageBucket: "rimo-8666d.appspot.com",
    messagingSenderId: "273572213277"
};
firebase.initializeApp(config);

var inputarea = document.getElementById('input-area');
var newuser = document.getElementById('newuser');
var login = document.getElementById('login');
var logout = document.getElementById('logout');
var info = document.getElementById('info');

logout.addEventListener('click', function() {
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    
  }
  else {
    logoutDisplay();
  }
});

function logoutDisplay() {
document.location = "../index.html";

}
