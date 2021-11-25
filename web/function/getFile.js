
import React, { useState, createContext, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDoc, addDoc, doc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { formControlClasses } from '@mui/material';

export const AuthenticatedUserContext = createContext({});


export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const getUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      const usersDocRef = doc(db, "clinics", user.uid );
      const data = await getDoc(usersDocRef);
      setUsers(data.data())
      // console.log( data.data())
      // console.log( data.id)
      // console.log( users.name)
      // console.log( user.name)
      // console.log( data)
      // console.log( user)
      console.log(users.name)
    }
 
    getUser()

  }, [user])
  
  
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};