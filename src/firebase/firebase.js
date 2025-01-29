import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyC86mfJ2eEvI9dkv9sY0EeGeqcWGLz8vdM",
  authDomain: "insta-clone-9d410.firebaseapp.com",
  projectId: "insta-clone-9d410",
  storageBucket: "insta-clone-9d410.firebasestorage.app",
  messagingSenderId: "279959090869",
  appId: "1:279959090869:web:6686e968b83da3b1a6b0fc",
  measurementId: "G-J1NWTLQCHE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage}