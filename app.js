// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlMNVGCyaUyHP1Xra6eT5FSaem_bEbsbc",
  authDomain: "notify-81e4e.firebaseapp.com",
  databaseURL: "https://notify-81e4e.firebaseio.com",
  storageBucket: "notify-81e4e.appspot.com",
  messagingSenderId: "706359507600"
};

firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const m = firebase.messaging();

m.requestPermission()
.then(function() {
  console.log('We have permission :)');
  
  return m.getToken();
})
.then(function(t) {
  console.log('Got token:', t);
})
.catch(function() {
   console.log('We do not have permission :('); 
});


m.onMessage(function(msg) {
  console.log('Got new message:', msg);
});
