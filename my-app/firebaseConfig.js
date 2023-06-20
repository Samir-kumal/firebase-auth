import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCeAjs66x4jNXpzkSfgpACCz5NyzzGlKF0",
  authDomain: "panauti--auth.firebaseapp.com",
  projectId: "panauti--auth",
  storageBucket: "panauti--auth.appspot.com",
  messagingSenderId: "198234697495",
  appId: "1:198234697495:web:4dd4b81b9215cf09021152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// IOS : 833484929166-up0em00kop7t255kjpaq6on08esce8q2.apps.googleusercontent.com

// Android : 833484929166-2h4893uhbic1i11jambtbbbvjoiihppd.apps.googleusercontent.com
