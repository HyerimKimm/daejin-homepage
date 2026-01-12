"use client";

import styles from "./Textarea.module.scss";

export default function Textarea({
  name,
  placeholder = "",
  rows = 4,
  cols,
  value,
  onChange,
}: {
  name: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
      className={styles.textarea}
    />
  );
}
