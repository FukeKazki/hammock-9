import { Container } from "~/component/layout";
import { UserContent } from "~/component/domain/top/UserContent";
import { css } from "@emotion/react";
import { breakpoints } from "~/styles/themes";

const gridContainer = css`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 32px;

  @media (min-width: ${breakpoints.pc}px) {
    grid-template-columns: 1fr 340px;
  }
`;

export const TopIndexTemplate = (): JSX.Element => {
  return (
    <Container>
      <div css={gridContainer}>
        <UserContent />
        <div>カレンダ</div>
      </div>
    </Container>
  );
};
