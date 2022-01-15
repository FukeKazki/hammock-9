import { css } from "@emotion/react";
import React from "react";

const title = css`
  color: gray;
`;

const Home: React.FC = () => {
  return (
    <>
      <div css={title}>syogi-camera</div>
      <div>将棋カメラ</div>
    </>
  );
};

export default Home;
