var firebaseConfig = {
    apiKey: "AIzaSyCQGtvcEScrmiXYCom9osaxtxRqcbfNMOo",
    authDomain: "kwitter-practice-32aae.firebaseapp.com",
    databaseURL: "https://kwitter-practice-32aae-default-rtdb.firebaseio.com",
    projectId: "kwitter-practice-32aae",
    storageBucket: "kwitter-practice-32aae.appspot.com",
    messagingSenderId: "812619002926",
    appId: "1:812619002926:web:898b8b9ab217196c5e1bbf",
    measurementId: "G-44RJXC4WT3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    });
 }