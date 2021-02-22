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
welcomeScreen = document.getElementById("welcome-screen");
userDetails = document.getElementById("user-details");
userName = document.getElementById("user-name");
userEmail = document.getElementById("user-email");
userImage = document.getElementById("user-img");

signInButton.addEventListener("click", clickButton);

var provider = new firebase.auth.GoogleAuthProvider();

// console.log(provider);

function clickButton() {
  //   console.log("EventListner Working");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      user = res.user;
    })
    .catch((err) => {
      console.log("Error Ocurred");
      console.log(err.code);
    });
}

function getUserDetails(user) {
  userName.innerHTML = user.displayName;
  userEmail.innerHTML = user.email;
  userImage.innerHTML = `<img class="img-fluid avt-img" src="${user.photoURL}" alt="">`;
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user);
    // console.log("logged in");
    console.log(welcomeScreen);
    welcomeScreen.style.display = "none";
    userDetails.style.display = "block";
    getUserDetails(user);
  } else {
    welcomeScreen.style.display = "block";
    userDetails.style.display = "none";
  }
});
