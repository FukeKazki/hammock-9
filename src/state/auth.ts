import { atom, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { firebaseAuth } from "~/infra/firebase";
import { User } from "@firebase/auth";

export interface AuthState {
  isLoading: boolean;
  token?: string;
  user?: User;
  contribution?: number;
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

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const res = await fetch(`/api/contributions/${user.reloadUserInfo.screenName}`);
        const contributions = await res.json();

        setAuthState({ isLoading: false, token, user, contribution: contributions.total });
      } catch (err) {
        setAuthState({ isLoading: false });
        console.error(err);
      }
    });

    return () => unSub();
  });

  return null;
};
