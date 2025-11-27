import Link from "next/link";

import styles from "./page.module.scss";

export default function ProductListPage() {
  return (
    <main className={styles.page_wrap}>
      <ul>
        <li>
          <Link href="/product/1">제품1</Link>
        </li>
      </ul>
    </main>
  );
}
