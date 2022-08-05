import React, { useState } from 'react';
import initializeFirebase from './Firebase.init';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
const [user, setUser] = useState({});

const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();



// Sign-up
const register = ( email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      const newUser = {email, displayName: name}
      setUser(newUser);
      console.log(newUser);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}


// Sign-in
// const login = (email, password) => {
//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }

const login = (email, password, history, location) => {

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
 
  // const user = userCredential.user;
 
  // ...
})
.catch((error) => {
  
})


}




// Google-signIn
const GoogleSign = () => {
  signInWithPopup(auth, GoogleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

// logout
const logout = () => {
  signOut(auth).then(() => {

  }).catch((error) => {

  })
}

    return {
        user,
        register,
        login,
        GoogleSign,
        logout,
        
    };
};

export default useFirebase;