importScripts('https://www.gstatic.com/firebasejs/3.6.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.6/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAlMNVGCyaUyHP1Xra6eT5FSaem_bEbsbc",
  authDomain: "notify-81e4e.firebaseapp.com",
  databaseURL: "https://notify-81e4e.firebaseio.com",
  storageBucket: "notify-81e4e.appspot.com",
  messagingSenderId: "706359507600"
};

firebase.initializeApp(config);

var m = firebase.messaging();
