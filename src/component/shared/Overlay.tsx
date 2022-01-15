import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";

export interface OverlayProps extends ComponentPropsWithRef<"div"> {
  color?: "primary" | "secondary";
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

const common = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index--overlay);
`;

export const Overlay = ({
  color = "primary",
  forwardRef,
  children,
  ...props
}: OverlayProps): JSX.Element => {
  let overlayColor = "rgba(0, 0, 0, 0.54)";
  if (color === "secondary") {
    overlayColor = "inherit";
  }

  const overlay = css`
    ${common};
    background: ${overlayColor};
  `;

  return (
    <div ref={forwardRef} css={overlay} {...props}>
      {children}
    </div>
  );
};
