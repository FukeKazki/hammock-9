import { ComponentPropsWithRef, ForwardedRef } from "react";

export interface CloseIconProps extends ComponentPropsWithRef<"svg"> {
  color?: "primary" | "secondary";
  forwardRef?: ForwardedRef<SVGSVGElement>;
}

export const CloseIcon = ({
  color = "primary",
  forwardRef,
  ...props
}: CloseIconProps): JSX.Element => {
  let fill = "#b5b5b5";
  if (color === "secondary") {
    fill = "#fff";
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.014 16.014" ref={forwardRef} {...props}>
      <g transform="translate(-692.5 -79.5)">
        <path
          d="M12.014,14.014a1.994,1.994,0,0,1-1.414-.586L-1.414,1.414a2,2,0,0,1,0-2.828,2,2,0,0,1,2.828,0L13.428,10.6a2,2,0,0,1-1.414,3.414Z"
          transform="translate(694.5 81.5)"
          fill={fill}
        />
        <path
          d="M0,14.014a1.994,1.994,0,0,1-1.414-.586,2,2,0,0,1,0-2.828L10.6-1.414a2,2,0,0,1,2.828,0,2,2,0,0,1,0,2.828L1.414,13.428A1.994,1.994,0,0,1,0,14.014Z"
          transform="translate(694.5 81.5)"
          fill={fill}
        />
      </g>
    </svg>
  );
};
