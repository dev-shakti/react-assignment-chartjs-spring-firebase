// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADRSBPykEMTUdbdmlH56dr8JhTM_MET_4",
  authDomain: "auth-assignment-a904f.firebaseapp.com",
  projectId: "auth-assignment-a904f",
  storageBucket: "auth-assignment-a904f.firebasestorage.app",
  messagingSenderId: "120563383442",
  appId: "1:120563383442:web:c9d327aaf10deb6655fa4b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };