import { ForwardedRef } from "react";
import { css } from "@emotion/react";
import Image, { ImageProps } from "next/image";
import { colors } from "~/styles/themes";

export interface UserIconProps extends ImageProps {
  src: string;
  alt: string;
  forwardRef?: ForwardedRef<HTMLImageElement>;
}

const common = css`
  border-radius: 50%;
  vertical-align: top;
  border: 2px solid ${colors.black.primary};
`;

export const UserIcon = ({ src, alt, ...props }: UserIconProps): JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      css={common}
      width={"84px"}
      height={"84px"}
      objectFit="cover"
      {...props}
    />
  );
};
