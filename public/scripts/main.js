// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

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
// const db = firebase.firestore();
var db = firebase.firestore();

// Firebase Config Above

signInButton = document.getElementById("signInButton");
signOutButton = document.getElementById("signOutButton");
welcomeScreen = document.getElementById("welcome-screen");
userDetails = document.getElementById("user-details");
userName = document.getElementById("user-name");
userEmail = document.getElementById("user-email");
userImage = document.getElementById("user-img");
loadingImage = document.getElementById("loader");

signInButton.addEventListener("click", clickButton);
signOutButton.addEventListener("click", signOutFromAccount);
var mainUser;
// Edit Bio
function displayEditArea() {
  document.getElementById("bio-cover").style.display = "block";
}

function hideEditArea() {
  document.getElementById("bio-cover").style.display = "none";
}

var provider = new firebase.auth.GoogleAuthProvider();

function clickButton() {
  welcomeScreen.style.display = "none";
  loadingImage.style.display = "block";

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      user = res.user;
    })
    .catch((err) => {
      welcomeScreen.style.display = "block";
      loadingImage.style.display = "none";

      console.log("Error Ocurred");
      console.log(err.code);
    });
}

function signOutFromAccount() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Signout
    })
    .catch((error) => {
      // Error
    });
}

function addDataFirestore(userData) {
  // console.log(userData);
  console.log("Hello! " + userData.displayName + " 🤩");

  var docRef = db.collection("user").doc(userData.email);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        // console.log("Document Exists 🥰");
        document.getElementById("user-bio").innerHTML = doc.data().bio;
      } else {
        // doc.data() will be undefined in this case
        // console.log("No such document! 🙄");
        docRef
          .set({
            name: userData.displayName,
            imageURL: userData.photoURL,
          })
          .then(() => {
            console.log("😎😎Document successfully written!😍");
          })
          .catch((error) => {
            console.error("❌❌Error writing document: ", error);
          });
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function getUserDetails(user) {
  userName.innerHTML = user.displayName;
  userEmail.innerHTML = user.email;
  userImage.innerHTML = `<img class="img-fluid avt-img" src="${user.photoURL}" alt="">`;
  addDataFirestore(user);
}

function addBio(user) {
  var bioValue = document.getElementById("newBio").value;
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("user")
      .doc(user.email)
      .update({
        name: user.displayName,
        imageURL: user.photoURL,
        bio: bioValue,
      })
      .then(() => {
        console.log("😎😎Bio successfully written!😍");
        document.getElementById("successWriteBro").style.display = "block";

        document.getElementById("form-bio").style.display = "none";
        document.getElementById("successWriteBro").classList.add = "bio-form";
        document.getElementById("successWriteBro").innerHTML =
          "Succesfully Bio Saved✅";
        setTimeout(function () {
          document.getElementById("successWriteBro").style.display = "none";
        }, 3000);
        setTimeout(function () {
          document.getElementById("form-bio").style.display = "block";
          location.reload();
        }, 200);
      })
      .catch((error) => {
        console.error("❌❌Error writing document: ", error);
      });
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    loadingImage.style.display = "none";
    welcomeScreen.style.display = "none";
    userDetails.style.display = "block";
    getUserDetails(user);
  } else {
    welcomeScreen.style.display = "block";
    userDetails.style.display = "none";
  }
});
