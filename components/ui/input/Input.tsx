"use client";

import styles from "./Input.module.scss";

export default function Input({
  type = "text",
  name,
  placeholder = "",
}: {
  type?: "text" | "email" | "password" | "number";
  name: string;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}
