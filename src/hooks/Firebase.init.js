import { initializeApp } from "firebase/app";
import firebaseConfig from "../hooks/firebase.config"

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default initializeFirebase;