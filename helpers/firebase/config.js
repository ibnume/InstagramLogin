import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDVhb9PDwrVbzRkksZoNwvx_Lqagrq_FxQ",
    authDomain: "instaclone-9bd81.firebaseapp.com",
    projectId: "instaclone-9bd81",
    storageBucket: "instaclone-9bd81.appspot.com",
    messagingSenderId: "421117900915",
    appId: "1:421117900915:web:49165925f0628855075206",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { firestore, auth, storage, analytics };
