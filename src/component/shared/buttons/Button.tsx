import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";
import { colors } from "~/styles/themes";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  forwardRef?: ForwardedRef<HTMLButtonElement>;
}

const common = css`
  width: 216px;
  height: 46px;
  color: ${colors.black.lighten[1]};
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.black.lighten[2]};
  border-radius: 24px;
  font-size: 1.4rem;
  font-weight: 500;
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

export const Button = ({ forwardRef, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button ref={forwardRef} css={common} {...props}>
      {children}
    </button>
  );
};
