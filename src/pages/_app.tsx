import "../styles/globals.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { AuthInit } from "~/state/auth";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <AuthInit />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
