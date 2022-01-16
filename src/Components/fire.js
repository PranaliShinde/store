import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCIpJ9eCS9BjmzphkP2V7gcX9HQN5CiE8s",
  authDomain: "grocery-store-74872.firebaseapp.com",
  projectId: "grocery-store-74872",
  storageBucket: "grocery-store-74872.appspot.com",
  messagingSenderId: "564449160594",
  appId: "1:564449160594:web:ab939c1efb00cbb635e54b"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);



export default fire;
