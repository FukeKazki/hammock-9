// import { css } from "@emotion/react";
import { useAuth } from "~/hook/useAuth";
import { Container } from "~/component/layout";
// import { breakpoints, colors } from "~/styles/themes";
// import { Container } from "~/component/layout/Container";
// import { GridContainer } from "~/component/layout/GridContainer";

export const TopIndexTemplate = (): JSX.Element => {
  const {
    auth: { user, contribution },
  } = useAuth();

  return (
    <Container>
      <p>top index page</p>
      <h1>{user?.displayName}</h1>
      <h1>{contribution}commit</h1>
    </Container>
  );
};
