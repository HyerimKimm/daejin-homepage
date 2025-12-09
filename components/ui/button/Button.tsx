import styles from "./Button.module.scss";

export default function Button({
  type = "button",
  children,
  style,
}: {
  type?: "button" | "submit";
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <button type={type} className={styles.button} style={style}>
      {children}
    </button>
  );
}
