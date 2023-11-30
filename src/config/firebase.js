// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFmd4uJ1w49MqNbjwINWL8qb3C0EMNYIk',
  authDomain: 'firebae-auth-a2124.firebaseapp.com',
  projectId: 'firebae-auth-a2124',
  storageBucket: 'firebae-auth-a2124.appspot.com',
  messagingSenderId: '862077151571',
  appId: '1:862077151571:web:630793f90423ddcc5699a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
