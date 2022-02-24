var firebaseConfig = {
    apiKey: "AIzaSyCplMqGz4j6oA3-Sv7DXdBBJwPokq7kV0Q",
    authDomain: "kwitterapp-94003.firebaseapp.com",
    databaseURL: "https://kwitterapp-94003-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-94003",
    storageBucket: "kwitterapp-94003.appspot.com",
    messagingSenderId: "726140945387",
    appId: "1:726140945387:web:8b71f17e9ee5d4a0388fae"
  };
  var app = initializeApp(firebaseConfig);
  function addRoom(){
  
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  
  }