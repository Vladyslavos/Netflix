import { createContext, useContext, useEffect, useState } from "react";
import { Value } from "sass";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface IUserData {
  email: string;
  password: string;
}

interface IContext {
  signUp: any;
  logIn: any;
  logOut: any;
  user: any;
}

const AuthContext = createContext<IContext | null>(null);

export function AuthContextProvider({ children }: any) {
  const [user, setUser]: any = useState({});

  function signUp({ email, password }: IUserData) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn({ email, password }: IUserData) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut({}) {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
