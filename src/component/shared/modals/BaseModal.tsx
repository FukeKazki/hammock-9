import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";
import { colors } from "~/styles/themes";
import { Overlay } from "~/component/shared/Overlay";
import { CloseIcon } from "../icons";

export interface BaseModalProps extends ComponentPropsWithRef<"div"> {
  close?: (() => void) | false;
  closeColor?: "primary" | "secondary";
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

const common = css`
  padding: 16px 16px 24px;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.white};
  border-radius: 16px;
`;

const closeIcon = css`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 16px;
  right: 16px;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    opacity: 0.5;
  }
`;

const BaseModal = ({
  close = false,
  closeColor = "primary",
  forwardRef,
  children,
  ...props
}: BaseModalProps): JSX.Element => {
  return (
    <Overlay>
      <div ref={forwardRef} css={common} {...props}>
        {close && (
          <button css={closeIcon} onClick={close}>
            <CloseIcon color={closeColor} />
          </button>
        )}
        {children}
      </div>
    </Overlay>
  );
};

export default BaseModal;
