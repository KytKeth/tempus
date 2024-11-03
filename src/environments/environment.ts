// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWTBeYoGJxyR1OUteggQ21Kpf_ST8Fszo",
  authDomain: "tempus-2ed99.firebaseapp.com",
  projectId: "tempus-2ed99",
  storageBucket: "tempus-2ed99.firebasestorage.app",
  messagingSenderId: "636245500593",
  appId: "1:636245500593:web:ebf1b315ab9f7c202db890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);