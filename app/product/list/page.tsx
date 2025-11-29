"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import styles from "./page.module.scss";

export default function ProductListPage() {
  const [category, setCategory] = useState("all");

  return (
    <main className={styles.page_wrap}>
      <aside className={styles.category_wrap}>
        <button
          className={`${styles.category_item} ${category === "all" ? styles.active : ""}`}
          onClick={() => setCategory("all")}
        >
          전체
        </button>
        <button
          className={`${styles.category_item} ${category === "Standard" ? styles.active : ""}`}
          onClick={() => setCategory("Standard")}
        >
          Standard
        </button>
        <button
          className={`${styles.category_item} ${category === "Pro" ? styles.active : ""}`}
          onClick={() => setCategory("Pro")}
        >
          Pro
        </button>
      </aside>
      <ul className={styles.product_list}>
        <li>
          <Image
            src="/pedal.png"
            alt="Pro-M3"
            priority
            width={100}
            height={100}
          />
          <Link href="/product/1">Pro-M3</Link>
        </li>
        <li>
          <Image
            src="/pedal.png"
            alt="Pro-M3"
            priority
            width={100}
            height={100}
          />
          <Link href="/product/2">STD-M1</Link>
        </li>
      </ul>
    </main>
  );
}
