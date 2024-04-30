import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCa-55Z2T8VSs-jbZjJINIeFSTCKv30Ibk",
    authDomain: "chamados-6079c.firebaseapp.com",
    projectId: "chamados-6079c",
    storageBucket: "chamados-6079c.appspot.com",
    messagingSenderId: "1077017733201",
    appId: "1:1077017733201:web:517aef52320ff034cd3070",
    measurementId: "G-FYK9WFRFXE"
};

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

export { auth, db, storage }