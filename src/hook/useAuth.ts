import {
  signInWithPopup,
  signOut as signOutFirebase,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { firebaseAuth } from "~/infra/firebase";
import { authState } from "~/state/auth";

const createAuthProvider = (kind: "github" | "google") => {
  switch (kind) {
    case "github":
      return new GithubAuthProvider();
    case "google":
      return new GoogleAuthProvider();
  }
};

export const useAuth = () => {
  // SignUp tools
  const [signUpIsLoading, setSignUpIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const signUp = async (kind: "github" | "google") => {
    setSignUpIsLoading(true);
    const provider = createAuthProvider(kind);

    try {
      await signInWithPopup(firebaseAuth, provider);
    } catch (err) {
      console.error(err);
      setSignUpError("サインインに失敗しました");
      return Promise.reject();
    } finally {
      setSignUpIsLoading(false);
    }
  };

  // SignIn tools
  const [signInIsLoading, setSignInIsLoading] = useState(false);
  const [signInError, setSignInError] = useState("");
  const signIn = async (kind: "github" | "google") => {
    setSignInIsLoading(true);
    const provider = createAuthProvider(kind);

    try {
      const res = await signInWithPopup(firebaseAuth, provider);
      const token = await res.user.getIdToken();

      console.log(token);
    } catch (err) {
      console.error(err);
      setSignInError("サインインに失敗しました");
      return Promise.reject();
    } finally {
      setSignInIsLoading(false);
    }
  };

  // SignOut tools
  const [signOutIsLoading, setSignOutIsLoading] = useState(false);
  const [signOutError, setSignOutError] = useState("");
  const signOut = async () => {
    setSignOutIsLoading(true);

    try {
      await signOutFirebase(firebaseAuth);
    } catch (err) {
      console.error(err);
      setSignOutError("サインアウトに失敗しました");
    } finally {
      setSignOutIsLoading(false);
    }
  };

  return {
    auth: useRecoilValue(authState),
    signUp,
    signUpIsLoading,
    signUpError,
    signIn,
    signInIsLoading,
    signInError,
    signOut,
    signOutIsLoading,
    signOutError,
  };
};
