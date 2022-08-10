// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDTF8VseayG2JUEckZX_3YoCrbgcG46O0U",
//   authDomain: "todo-list-d1eee.firebaseapp.com",
//   databaseURL: "https://todo-list-d1eee-default-rtdb.firebaseio.com",
//   projectId: "todo-list-d1eee",
//   storageBucket: "todo-list-d1eee.appspot.com",
//   messagingSenderId: "1038694320871",
//   appId: "1:1038694320871:web:b8483480e7552d6e6db042"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
// export const auth = getAuth();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
import {getAuth} from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe6VkviZxc99dVp9lOxJAqEwy96w--SV4",
  authDomain: "mera-todoproject.firebaseapp.com",
  projectId: "mera-todoproject",
  storageBucket: "mera-todoproject.appspot.com",
  messagingSenderId: "809404910835",
  appId: "1:809404910835:web:de3bfe8a215c94208d7b86",
  measurementId: "G-T8LRJ41VNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db  = getDatabase(app);
export const auth = getAuth();