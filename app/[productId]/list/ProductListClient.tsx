"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useMemo, useState } from "react";

import Tab from "@/components/ui/tab/Tab";

import styles from "./page.module.scss";

export default function ProductListClient() {
  const { product } = useParams();

  const [category, setCategory] = useState("all");

  const items = [
    {
      product: "pedalboard",
      categories: [
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
      ],
      products: [
        {
          id: 1,
          name: "Pro-M3",
          category: "Pro",
          image: "/pedal.png",
          price: 100000,
          description: "Pro-M3 설명",
        },
        {
          id: 2,
          name: "Pro-M2",
          category: "Pro",
          image: "/pedal.png",
          price: 80000,
          description: "Pro-M2 설명",
        },
        {
          id: 3,
          name: "Standard-M1",
          category: "Standard",
          image: "/pedal.png",
          price: 60000,
          description: "Standard-M1 설명",
        },
        {
          id: 4,
          name: "Standard-M2",
          category: "Pro",
          image: "/pedal.png",
          price: 120000,
          description: "Standard-M2 설명",
        },
        {
          id: 5,
          name: "Standard-M3",
          category: "Standard",
          image: "/pedal.png",
          price: 140000,
          description: "Standard-M3 설명",
        },
      ],
    },
    {
      product: "desk",
      categories: [
        {
          label: "전체",
          value: "all",
          onClick: () => setCategory("all"),
        },
      ],
      products: [
        {
          id: 1,
          name: "desk-1",
          category: null,
          image: "/pedal.png",
          price: 100000,
          description: "2인용 책상",
        },
      ],
    },
  ];

  const currentCategories =
    useMemo(() => {
      return items.find((item) => item.product === product)?.categories || [];
    }, [items]) || [];

  const currentProducts =
    useMemo(() => {
      return items.find((item) => item.product === product)?.products || [];
    }, [items]) || [];

  if (currentCategories.length <= 0) {
    throw new Error("카테고리가 없습니다.");
  }

  return (
    <main className={styles.page_wrap}>
      {/* 카테고리 탭 */}
      <Tab items={currentCategories} activeValue={category} />
      {/* 제품 목록 */}
      <ul className={styles.product_list}>
        {currentProducts.map((item) => (
          <Link key={item.id} href={`/${product}/${item.id}`}>
            <li className={styles.product_item}>
              <Image
                src={item.image}
                alt={item.name}
                priority
                width={100}
                height={100}
              />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
