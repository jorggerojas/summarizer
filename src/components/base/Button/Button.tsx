import React from "react";
import cn from "clsx";
import "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium";
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({
  size = "medium",
  variant = "primary",
  role = "button",
  type = "button",
  className,
  disabled,
  ...props
}: ButtonProps): React.ReactElement => {
  const classNames = cn(className, {
    disabled,
    primary: variant === "primary",
    secondary: variant === "secondary",
    tertiary: variant === "tertiary",
    medium: size === "medium",
    small: size === "small",
  });

  return (
    <button {...props} className={classNames} role={role} type={type}>
      {props.children}
    </button>
  );
};

export default Button;
