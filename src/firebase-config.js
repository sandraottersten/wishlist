import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCtpiLhlmm98gU7kRHQs_nFpwXuIagIguQ",
  authDomain: "xmas-wishlist-62b70.firebaseapp.com",
  databaseURL: "https://xmas-wishlist-62b70.firebaseio.com",
  projectId: "xmas-wishlist-62b70",
  storageBucket: "",
  messagingSenderId: "348316831563"
  };

  const fb = firebase.initializeApp(config);
  const db = firebase.database()

  export {db, fb};
