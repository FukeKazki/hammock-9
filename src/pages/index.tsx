import { css } from "@emotion/react";
import React from "react";
import { useAuth } from "~/hook/useAuth";

const title = css`
  color: gray;
`;

const Home: React.FC = () => {
  const { auth, signUp, signUpError, signUpIsLoading } = useAuth();
  console.log("token", auth.token);

  return (
    <>
      <div css={title}>syogi-camera</div>
      <div>将棋カメラ</div>
      {signUpError && <p>エラー: {signUpError}</p>}
      <button disabled={signUpIsLoading} onClick={() => signUp("github")}>
        ログイン
      </button>
    </>
  );
};

export default Home;
