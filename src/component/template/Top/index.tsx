// import { css } from "@emotion/react";
import { Fragment } from "react";
import { useAuth } from "~/hook/useAuth";
// import { breakpoints, colors } from "~/styles/themes";
// import { Container } from "~/component/layout/Container";
// import { GridContainer } from "~/component/layout/GridContainer";

export const TopIndexTemplate = (): JSX.Element => {
  const {
    auth: { user, contribution },
  } = useAuth();

  return (
    <Fragment>
      <p>top index page</p>
      <h1>{user?.displayName}</h1>
      <h1>{contribution}commit</h1>
    </Fragment>
  );
};
