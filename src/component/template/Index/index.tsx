import { Container, FlexContainer } from "~/component/layout";
import { LoginButton } from "~/component/shared/buttons";
import { GitHubIcon } from "~/component/shared/icons";
import { useAuth } from "~/hook/useAuth";

export const IndexTemplate = (): JSX.Element => {
  const { signUp, signUpIsLoading } = useAuth();

  return (
    <Container>
      <FlexContainer justifyContent="center" alignItems="center" flexDirection="column">
        <h1>ハンモック予約し9？？</h1>
        <LoginButton disabled={signUpIsLoading} onClick={() => signUp("github")}>
          <GitHubIcon />
          GitHubでログイン
        </LoginButton>
        <h1>まずはログインし9？？</h1>
      </FlexContainer>
    </Container>
  );
};
