import { Fragment, ReactNode } from "react";
import { useRouter } from "next/router";
import { useAuth } from "~/hook/useAuth";

export type Props = {
  children: ReactNode;
};

export const RequireAuthenticated = ({ children }: Props): JSX.Element => {
  const { auth } = useAuth();
  const router = useRouter();

  if (auth.isLoading) return <p>now loading...</p>;

  if (!auth.token) {
    router.push("/auth/login");
    return <p>now loading...</p>;
  }

  return <Fragment>{children}</Fragment>;
};
