import { css } from "@emotion/react";
import { ComponentPropsWithRef, ForwardedRef } from "react";

export interface FlexContainerProps extends ComponentPropsWithRef<"div"> {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "start" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

export const FlexContainer = ({
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "normal",
  flexWrap = "nowrap",
  forwardRef,
  children,
  ...props
}: FlexContainerProps): JSX.Element => {
  const flexContainer = css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${flexWrap};
  `;

  return (
    <div ref={forwardRef} css={flexContainer} {...props}>
      {children}
    </div>
  );
};
