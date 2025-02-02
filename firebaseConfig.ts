import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY1vYhBmNanVxs6_ADESsRuQqRLLO4A-A",
    authDomain: "decathlonclone.firebaseapp.com",
    projectId: "decathlonclone",
    storageBucket: "decathlonclone.firebasestorage.app",
    messagingSenderId: "899348245167",
    appId: "1:899348245167:web:ccd1ed784536bc1e5b025a",
    measurementId: "G-EC4DT3NMHL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
