import Link from "next/link";

import Three from "@/components/three/Three";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page_wrap}>
      <h1>메인화면</h1>
      <Three />
      <Link href="/product/1" className={styles.apply_button}>
        <span>견적 신청하기</span>
      </Link>
    </div>
  );
}
