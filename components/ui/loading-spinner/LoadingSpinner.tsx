"use client";

import styles from "./LoadingSpinner.module.scss";

/**
 * @param size - 스피너의 크기, px 단위
 * @default 20px
 * @returns {React.ReactNode}
 */
export default function LoadingSpinner({ size = 20 }: { size?: number }) {
  return (
    <div
      className={styles.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
