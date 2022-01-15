import React from "react";
import { useAuth } from "~/hook/useAuth";

const Home: React.FC = () => {
  const { auth, signUp, signUpError, signUpIsLoading } = useAuth();
  console.log("token", auth.token);

  return (
    <>
      {signUpError && <p>エラー: {signUpError}</p>}
      <button disabled={signUpIsLoading} onClick={() => signUp("github")}>
        ログイン
      </button>
    </>
  );
};

export default Home;
