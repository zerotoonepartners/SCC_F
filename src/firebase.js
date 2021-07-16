import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA2N6Hul7AHPNAHBxXnXS8dQeMQ8JCX2eA',
  authDomain: 'ssc-ztop.firebaseapp.com',
  projectId: 'ssc-ztop',
  storageBucket: 'ssc-ztop.appspot.com',
  messagingSenderId: '525589226726',
  appId: '1:525589226726:web:9501c00de137b856f64727',
  measurementId: 'G-7Z52ZC9QSS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDB = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
