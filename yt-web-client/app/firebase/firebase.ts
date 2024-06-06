// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB_DJAOfvpWjeQGNxZ053UNQfUDJaPq8Y",
  authDomain: "yt-clone-52971.firebaseapp.com",
  projectId: "yt-clone-52971",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const functions = getFunctions();

/**
 * Signs user in with Google popup
 * @returns a promise that resolves with the user's credentials
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out
 * @returns a promise that resolves when user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns a function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(
  callback: (user: User | null) => void
) {
  return onAuthStateChanged(auth, callback);
}
