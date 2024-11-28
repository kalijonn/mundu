import { ComponentProps } from "react";

import styles from "./button.module.css";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "destructive";
  size?: "small" | "medium" | "large";
};

export const Button = ({ variant, size = "medium", ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.default} ${styles[variant]} ${styles[size]}`}
      {...props}
    />
  );
};
