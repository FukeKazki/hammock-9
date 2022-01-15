import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";

export interface GitHubIconProps extends ComponentPropsWithRef<"svg"> {
  color?: "primary" | "secondary";
  forwardRef?: ForwardedRef<SVGSVGElement>;
}

const common = css`
  width: 84px;
  height: 84px;
  object-fit: contain;
`;

export const GitHubIcon = ({
  color = "primary",
  forwardRef,
  ...props
}: GitHubIconProps): JSX.Element => {
  let fill = "#bdbdbd";
  if (color === "secondary") {
    fill = "#333";
  }

  return (
    <svg
      id="github_icon"
      data-name="github_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="155.768"
      height="155.768"
      viewBox="0 0 155.768 155.768"
      ref={forwardRef}
      css={common}
      {...props}
    >
      <path
        id="logo-github"
        d="M105.17,27.286c-43.01,0-77.884,35.778-77.884,79.866,0,35.291,22.322,65.193,53.267,75.763a6.1,6.1,0,0,0,1.321.139,3.768,3.768,0,0,0,4-3.964c0-1.912-.07-6.919-.1-13.595a35.6,35.6,0,0,1-7.858.939c-14.986,0-18.393-11.648-18.393-11.648C55.971,145.572,50.86,143.1,50.86,143.1c-6.78-4.763-.035-4.9.487-4.9h.035c7.823.7,11.926,8.275,11.926,8.275,3.894,6.815,9.11,8.727,13.769,8.727a21.9,21.9,0,0,0,8.9-2.086c.7-5.146,2.712-8.658,4.937-10.674-17.281-2.017-35.465-8.866-35.465-39.464a31.259,31.259,0,0,1,8-21.418c-.8-2.017-3.477-10.153.765-21.14a6.483,6.483,0,0,1,1.738-.174c2.816,0,9.179,1.078,19.68,8.38a72.394,72.394,0,0,1,39.012,0c10.5-7.3,16.863-8.379,19.68-8.379a6.483,6.483,0,0,1,1.738.174c4.242,10.987,1.565,19.123.765,21.14a31.386,31.386,0,0,1,8,21.418c0,30.667-18.219,37.412-35.569,39.394,2.782,2.469,5.285,7.336,5.285,14.777,0,10.674-.1,19.3-.1,21.9a3.748,3.748,0,0,0,3.964,4,6.733,6.733,0,0,0,1.391-.139c30.98-10.57,53.267-40.507,53.267-75.763C183.054,63.064,148.18,27.286,105.17,27.286Z"
        transform="translate(-27.286 -27.286)"
        fill={fill}
      />
      <rect
        id="square"
        data-name="square"
        width="107.615"
        height="59.602"
        transform="translate(25.156 53.941)"
        fill="none"
      />
    </svg>
  );
};
