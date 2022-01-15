import { atom, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { firebaseAuth } from "~/infra/firebase";

export interface AuthState {
  isLoading: boolean;
  token?: string;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isLoading: true,
  },
  dangerouslyAllowMutability: true,
});

export const AuthInit = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const unSub = firebaseAuth.onAuthStateChanged(async (user) => {
      if (!user) {
        setAuthState({ isLoading: false });
        return;
      }

      try {
        const token = await user.getIdToken();

        setAuthState({ isLoading: false, token });
      } catch (err) {
        setAuthState({ isLoading: false });
        console.error(err);
      }
    });

    return () => unSub();
  });

  return null;
};
