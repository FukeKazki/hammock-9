import { css } from "@emotion/react";
import { FlexContainer } from "~/component/layout";
import { UserIcon } from "~/component/shared/icons";
import { useAuth } from "~/hook/useAuth";
import { breakpoints, colors } from "~/styles/themes";

const userContent = css`
  width: 100%;
  gap: 40px;
  border-radius: 40px;
  padding: 40px 16px;
  background: ${colors.white};
  box-shadow: 0 3px 6px ${colors.black.lighten[3]};

  @media (min-width: ${breakpoints.pc}px) {
    max-width: 340px;
    order: 2;
  }
`;

const userItem = css`
  width: 100%;
  gap: 12px;
`;

const name = css`
  font-size: 3.6rem;
  font-weight: bold;
  margin: 0;
`;

const id = css`
  font-size: 1.4rem;
  margin: 0;
`;

const contributions = css`
  font-size: 3.6rem;
  font-weight: bold;
  margin: 0;
`;

const unit = css`
  font-size: 1.8rem;
`;

export const UserContent = (): JSX.Element => {
  const {
    auth: { user, contribution },
  } = useAuth();

  return (
    <FlexContainer
      css={userContent}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <FlexContainer css={userItem} justifyContent="center" alignItems="center">
        {user?.photoURL && <UserIcon src={user.photoURL} alt="user" />}
        <FlexContainer flexDirection="column">
          <h2 css={name}>{user?.displayName}</h2>
          <p css={id}>
            @
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              user?.reloadUserInfo.screenName
            }
          </p>
        </FlexContainer>
      </FlexContainer>
      <h3 css={contributions}>
        {contribution}
        <span css={unit}>contributions</span>
      </h3>
    </FlexContainer>
  );
};
