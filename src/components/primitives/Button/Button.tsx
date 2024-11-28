import { ComponentProps } from "react";

import styles from "./button.module.css";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "destructive";
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${styles.default} ${styles[variant]}`} />
  );
};
