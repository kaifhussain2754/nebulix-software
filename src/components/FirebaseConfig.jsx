// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import Auth and GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnYdk2XDReJKfF6U2Z4F9MaazUd-AQxAU",
  authDomain: "nebulix-software.firebaseapp.com",
  projectId: "nebulix-software",
  storageBucket: "nebulix-software.appspot.com",
  messagingSenderId: "48492640738",
  appId: "1:48492640738:web:92d6db286e40dc114e21bb",
  measurementId: "G-E7VQ80TVQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Set up Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the required modules
export { auth, googleProvider, analytics };
