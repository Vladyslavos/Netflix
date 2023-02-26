import { createContext, useContext, useEffect, useState } from "react";
import { Value } from "sass";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface ISignUp {
  email: string;
  password: string;
}

interface IContext {
  signUp: any;
  user: {};
}

const AuthContext = createContext<IContext | null>(null);

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState({});
  function signUp({ email, password }: ISignUp) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <AuthContext.Provider value={{ signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
