"use client";

import styles from "./Counter.module.scss";

export default function Counter({
  value,
  onChange,
  min,
  max,
  step,
}: {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div className={styles.counter_wrap}>
      <button
        type="button"
        className={styles.counter_button}
        onClick={() => onChange(value - step)}
        disabled={value <= min}
      >
        -
      </button>
      <span className={styles.counter_value}>{value}</span>
      <button
        type="button"
        className={styles.counter_button}
        onClick={() => {
          console.log(value + step);
          onChange(value + step);
        }}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
