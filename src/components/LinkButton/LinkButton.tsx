import s from "./LinkButton.module.scss";
import React, { type AnchorHTMLAttributes } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
};

export const LinkButton = ({
  className = "",
  children = "Get started",
  ...restProps
}: LinkButtonProps) => {
  return (
    <a className={`${s.button} ${className}`} role="button" {...restProps}>
      {children}
    </a>
  );
};
