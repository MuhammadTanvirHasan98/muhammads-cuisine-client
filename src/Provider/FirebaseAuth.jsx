import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";





export const AuthContext = createContext({});


const FirebaseAuth = ({children}) => {

  const[user, setUser] = useState([]);
  const[loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();


  //create user
  const createUser = (email,password) =>{
       setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
  }


  // update user //
  const updateUserProfile = (name, photo) =>{
      setLoading(true);
     return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo
    });
  }

  // user login in //
  const loginUser = (email,password) =>{
      setLoading(true);
     return signInWithEmailAndPassword(auth, email, password);
  }

  //user google login //
  const loginWithGoogle = () =>{
     setLoading(true);
     return signInWithPopup(auth, googleProvider);
  }

  
  // Observing user by onAuthStateChanged
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
        console.log("Current user logged in!")
      }
      else{
        setUser(null);
        setLoading(false);
        console.log("Current user logged out!")
      }
    })
    
    return ()=>{
      unsubscribe();
    }
    
  },[])
  
  


  // user log out //
  const logOut = async() =>{
     setLoading(true);
     return signOut(auth);
  }
  
  
  
  const authInfo = {
     user,
     setUser,
     createUser,
     loginUser,
     loginWithGoogle,
     logOut,
     updateUserProfile,
     loading,
     setLoading,
  };


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    </div>
  );
};

export default FirebaseAuth;

FirebaseAuth.propTypes = {
   children: PropTypes.object
}