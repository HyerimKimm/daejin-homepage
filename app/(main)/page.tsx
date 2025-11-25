import Three from "@/component/three/Three";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div className={styles.page_wrap}>
      <Three />
    </div>
  );
}
