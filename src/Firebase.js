import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyC9nqdJUzGseXsAQWPnnzxwjoxKygVD8MY",
  authDomain: "bogota-project.firebaseapp.com",
  databaseURL: "https://bogota-project.firebaseio.com",
  projectId: "bogota-project",
  storageBucket: "bogota-project.appspot.com",
  messagingSenderId: "523196163950"
};
var fire = firebase.initializeApp(config);
export default fire;
