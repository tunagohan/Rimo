
var config = {
    apiKey: "APIキー",
    authDomain: "ドメイン名",
    databaseURL: "URL",
    storageBucket: "BucketURL",
    messagingSenderId: "messaginID"
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
