"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Tab from "@/components/ui/tab/Tab";

import styles from "./page.module.scss";

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
