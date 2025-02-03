// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,getAuth , } from "firebase/auth";
import { getFirestore, collection, doc,addDoc,getDocs ,updateDoc,
  deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGRYcwcHoO_klHotc8QhKbX0Qd_Q3XBGk",
  authDomain: "test-d14aa.firebaseapp.com",
  databaseURL: "https://test-d14aa-default-rtdb.firebaseio.com",
  projectId: "test-d14aa",
  storageBucket: "test-d14aa.appspot.com",
  messagingSenderId: "1022392053565",
  appId: "1:1022392053565:web:d2fe511ce8267d3b629f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,db,collection, addDoc,getDocs,doc , onAuthStateChanged, 
  signOut ,updateDoc, 
  deleteDoc}

// 


// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
