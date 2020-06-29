import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC4EA2khAdZSfI4Zsfrnnhi-GS3m2EW95s",
  authDomain: "web-page-e26e1.firebaseapp.com",
  databaseURL: "https://web-page-e26e1.firebaseio.com",
  projectId: "web-page-e26e1",
  storageBucket: "web-page-e26e1.appspot.com",
  messagingSenderId: "610152696919",
  appId: "1:610152696919:web:7b888c2ffc0a57d2712712",
  measurementId: "G-VF4QREM3ZB"
};
const fire =firebase.initializeApp(firebaseConfig);
export default firebase;