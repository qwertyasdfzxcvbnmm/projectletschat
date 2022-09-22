
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDXXbTe-XtlCODmzzjW_p3OpETgVQyHWdQ",
      authDomain: "kwitter-fb96c.firebaseapp.com",
      databaseURL: "https://kwitter-fb96c-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb96c",
      storageBucket: "kwitter-fb96c.appspot.com",
      messagingSenderId: "657908785697",
      appId: "1:657908785697:web:e89613a0e79b2d44d63960"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
