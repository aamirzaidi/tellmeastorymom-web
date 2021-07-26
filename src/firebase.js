import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
apiKey:"AIzaSyBzsXySNCpKOpEqY-QveLwgKg7vO3DxnMc",
authDomain:"tellmeastorymom.firebaseapp.com",
databaseURL:"https://tellmeastorymom.firebaseio.com",
projectId:"tellmeastorymom-c17e3",
storageBucket: "tellmeastorymom-c17e3.appspot.com",
messagingSenderId:"451791648660",
appId:"1:451791648660:android:d9fe221e9280c9b11c8181"
}; 

//initialise firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage();


export const auth = app.auth(); 
export {storage};
export default db;

