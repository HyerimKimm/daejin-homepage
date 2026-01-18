"use client";

import styles from "./Input.module.scss";

export default function Input({
  type = "text",
  name,
  placeholder = "",
  value,
  onChange = () => {},
  maxLength,
}: {
  type?: "text" | "email" | "password" | "number";
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
      maxLength={maxLength}
    />
  );
}
