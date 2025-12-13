"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMemo, useState } from "react";

import { ProductType } from "@/types/product";

import styles from "./Header.module.scss";

export default function Header({
  productList,
}: {
  productList: ProductType[];
}) {
  const pathname = usePathname();

  const activeProduct = useMemo(() => {
    return pathname.split("/")[1];
  }, [pathname]);

  return (
    <header className={styles.header_wrap}>
      <Link href="/" className={styles.logo}>
        <Image src="/logos/logo.svg" alt="logo" width={45} height={45} />
        <span>D.Atelier</span>
      </Link>
      <nav className={styles.nav_wrap}>
        {productList.map((item) => (
          <Link
            key={item.value}
            href={`/${item.value}/list`}
            className={`${styles.nav_item} ${activeProduct === item.value ? styles.active : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/help"
          className={`${styles.nav_item} ${activeProduct === "help" ? styles.active : ""}`}
        >
          고객지원
        </Link>
      </nav>
    </header>
  );
}
