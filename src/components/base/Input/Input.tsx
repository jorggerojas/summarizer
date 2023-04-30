import React from "react";
import cn from "clsx";

import s from "./Input.module.css";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  status?: "default" | "error";
  required?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { id, label, status = "default", required } = props;

  // throw error if required prop is passed without label
  if (required && !label) {
    throw new Error(
      "Input with required prop must have a label. Either remove the required prop or add a label.",
      {
        cause: "required prop passed without label",
      },
    );
  }

  const inputClassName = cn(s.input, {
    [s.error]: status === "error",
  });
  const labelClassName = cn(s.label, {
    [s.error]: status === "error",
    [s["label-required"]]: required,
  });

  return (
    <label htmlFor={id} className={s.root} aria-label='label'>
      {label && <span className={labelClassName}>{label}</span>}
      <input
        {...props}
        aria-label='input'
        placeholder={props.placeholder || ""}
        role='textbox'
        id={id}
        className={inputClassName}
        required={required}
      />
    </label>
  );
};

export default Input;
