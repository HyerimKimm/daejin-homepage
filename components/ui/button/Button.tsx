import styles from "./Button.module.scss";

export default function Button({
  type = "button",
  children,
  className,
  style,
}: {
  type?: "button" | "submit";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
