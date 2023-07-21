import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDViqhwUwzp2IjSejXhnUltk8Zk05CTtjQ",
  authDomain: "react-netflix-clone-c0198.firebaseapp.com",
  projectId: "react-netflix-clone-c0198",
  storageBucket: "react-netflix-clone-c0198.appspot.com",
  messagingSenderId: "955395923780",
  appId: "1:955395923780:web:c91be9af8be375f8a84111",
  measurementId: "G-HB7CCYD3E4"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
