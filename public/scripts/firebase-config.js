function firebaseConfig() {
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
}

export default firebaseConfig;
