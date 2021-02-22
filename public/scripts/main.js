var firebaseConfig = {
  apiKey: "AIzaSyACdB3ZVZZ4o6RlNwIbf6tDZW0k9DOvr4Q",
  authDomain: "workshop-firebase-757f5.firebaseapp.com",
  projectId: "workshop-firebase-757f5",
  storageBucket: "workshop-firebase-757f5.appspot.com",
  messagingSenderId: "201024999919",
  appId: "1:201024999919:web:6094e336cd666a41de261a",
  measurementId: "G-S593S0JXGM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Firebase Config Above

signInButton = document.getElementById("signInButton");

signInButton.addEventListener("click", clickButton);

var provider = new firebase.auth.GoogleAuthProvider();

console.log(provider);

function clickButton() {
  console.log("EventListner Working");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      console.log("Error Ocurred");
      console.log(err.code);
    });
}
