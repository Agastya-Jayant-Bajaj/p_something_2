const config = {
    apiKey: "AIzaSyCqb2nWpNdl_YJGvErinkDAfRGXKXDAiC0",
    authDomain: "class93-32d32.firebaseapp.com",
    projectId: "class93-32d32",
    storageBucket: "class93-32d32.appspot.com",
    messagingSenderId: "526768581560",
    appId: "1:526768581560:web:2fdbfb061e6a4541587d4d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(config);
  
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
