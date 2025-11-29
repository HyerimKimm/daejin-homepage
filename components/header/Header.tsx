import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header_wrap}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" alt="logo" width={45} height={45} />
        <span>D.Atelier</span>
      </Link>
      <nav className={styles.nav_wrap}>
        <Link href="/product/list" className={styles.nav_item}>
          제품목록
        </Link>
        <Link href="/help" className={styles.nav_item}>
          고객지원
        </Link>
      </nav>
    </header>
  );
}
