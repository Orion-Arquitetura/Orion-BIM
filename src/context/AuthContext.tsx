import { AuthError, User, UserCredential } from "firebase/auth";
import { createContext, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "utils/firebaseConfig";
import { setCookie } from "nookies";

type AuthContextType = {
  login: () => void;
  user: UserCredential | undefined;
  loading: boolean;
  error: AuthError | undefined;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthContextProvider(props: any) {
  //hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //functions
  function login() {
    const email = document.querySelector('input[type="email"]') as HTMLInputElement;
    const password = document.querySelector('input[type="password"]') as HTMLInputElement;

    signInWithEmailAndPassword(email.value, password.value).then((res) => {
      if (res?.user.uid) {
        setCookie(null, "userData", JSON.stringify(res.user), {
          maxAge: 86400,
        });
      }
    });
  }

  //return
  return (
    <AuthContext.Provider value={{ login, user, loading, error }}>
      {props.children}
    </AuthContext.Provider>
  );
}
