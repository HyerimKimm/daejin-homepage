"use client";

import styles from "./Radio.module.scss";

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
    <div className={styles.radio_wrap}>
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        className={styles.radio_input}
      />
      {label && (
        <label htmlFor={id} className={styles.radio_label}>
          {label}
        </label>
      )}
    </div>
  );
}
