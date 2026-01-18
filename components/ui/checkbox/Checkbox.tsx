"use client";

import styles from "./Checkbox.module.scss";

export default function Checkbox({
  name,
  id,
  label,
  onChange,
  checked,
}: {
  name: string;
  id: string;
  label: string;
  onChange: (checked: boolean) => void;
  checked: boolean;
}) {
  return (
    <div className={styles.checkbox_wrap}>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        className={styles.checkbox_input}
      />
      <label htmlFor={id} className={styles.checkbox_label}>
        <span className={styles.checkbox_custom}>
          {checked && (
            <svg
              className={styles.checkbox_icon}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        {label && <span className={styles.checkbox_label_text}>{label}</span>}
      </label>
    </div>
  );
}
