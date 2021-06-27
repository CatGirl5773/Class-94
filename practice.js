var firebaseConfig = {
    apiKey: "AIzaSyBvu1V_L9Gg8PnNMg9e3ENDN0W8ffeTiHI",
    authDomain: "kwitter-7c67e.firebaseapp.com",
    databaseURL: "https://kwitter-7c67e-default-rtdb.firebaseio.com",
    projectId: "kwitter-7c67e",
    storageBucket: "kwitter-7c67e.appspot.com",
    messagingSenderId: "701250774597",
    appId: "1:701250774597:web:8d8a148ea153a97b16e52c"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }