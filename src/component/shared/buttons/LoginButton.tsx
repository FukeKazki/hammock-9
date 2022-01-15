import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";
import { colors } from "~/styles/themes";

export interface LoginButtonProps extends ComponentPropsWithRef<"button"> {
  forwardRef?: ForwardedRef<HTMLButtonElement>;
}

const common = css`
  height: 108px;
  padding: 0 176px 0 12px;
  color: ${colors.black.lighten[1]};
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  border: 1px solid ${colors.black.lighten[2]};
  border-radius: 54px;
  font-size: 3.6rem;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${colors.yellow.primary};
    border: 1px solid ${colors.yellow.primary};
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const LoginButton = ({ forwardRef, children, ...props }: LoginButtonProps): JSX.Element => {
  return (
    <button ref={forwardRef} css={common} {...props}>
      {children}
    </button>
  );
};
