"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import styles from "./page.module.scss";
import Tab from "@/components/ui/tab/Tab";

export default function ProductListPage() {
  

  const [category, setCategory] = useState("all");

  const items = [
    {
      label: "전체",
      value: "all",
      onClick: () => setCategory("all"),
    },
    {
      label: "Standard",
      value: "Standard",
      onClick: () => setCategory("Standard"),
    },
    {
      label: "Pro",
      value: "Pro",
      onClick: () => setCategory("Pro"),
    },
  ];

  return (
    <main className={styles.page_wrap}>
      <Tab items={items} activeValue={category} />
      {/* <aside className={styles.category_wrap}>

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
      </aside> */}
      <ul className={styles.product_list}>
        <Link href="/product/1">
          <li>
            <Image
              src="/pedal.png"
              alt="Pro-M3"
              priority
              width={100}
              height={100}
            />
            Pro-M3
          </li>
        </Link>
      </ul>
    </main>
  );
}
