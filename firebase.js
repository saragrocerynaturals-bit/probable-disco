import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEfYI6Wcc89TVKLr_pFQbA7KOnyb52GvA",
  authDomain: "sara-unique-naturals.firebaseapp.com",
  projectId: "sara-unique-naturals",
  storageBucket: "sara-unique-naturals.firebasestorage.app",
  messagingSenderId: "1078362897701",
  appId: "1:1078362897701:web:dcdf666bf67cae60e22ecc",
  measurementId: "G-MBQ524D12C"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase Connected");
