import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";
import { breakpoints } from "~/styles/themes";

type Devise = {
  sp: number;
  tablet?: number;
  pc?: number;
};

export interface GridProps extends ComponentPropsWithRef<"div"> {
  cols?: number | Devise;
  space?: number | Devise;
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

/**
 * Grid Component
 * @example
 * // No responsive
 * <GridContainer cols={1}>
 *   Hello
 * </GridContainer>
 * @example
 * // Responsive
 * <GridContainer cols={{ base: 1, tablet: 2, pc: 3}}>
 *   <div>Hello</div>
 *   <div>Hello</div>
 *   <div>Hello</div>
 * </GridContainer>
 */
export const GridContainer = ({
  cols = 1,
  space = 0,
  forwardRef,
  children,
  ...props
}: GridProps): JSX.Element => {
  const isColsNumber = typeof cols === "number";
  const isSpaceNumber = typeof space === "number";

  const gridContainer = css`
    display: grid;
    grid-template-columns: repeat(${isColsNumber ? cols : cols.sp}, minmax(0, 1fr));
    place-items: center;
    gap: ${isSpaceNumber ? space : space.sp}px;

    @media (min-width: ${breakpoints.tablet}px) {
      grid-template-columns: repeat(${isColsNumber ? cols : cols.tablet}, minmax(0, 1fr));
      gap: ${isSpaceNumber ? "inherit" : space.tablet}px;
    }

    @media (min-width: ${breakpoints.pc}px) {
      grid-template-columns: repeat(${isColsNumber ? cols : cols.pc}, minmax(0, 1fr));
      gap: ${isSpaceNumber ? "inherit" : space.pc}px;
    }
  `;

  return (
    <div css={gridContainer} ref={forwardRef} {...props}>
      {children}
    </div>
  );
};
