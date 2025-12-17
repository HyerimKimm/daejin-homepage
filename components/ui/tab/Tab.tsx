"use client";

import { useParams, useRouter } from "next/navigation";

import styles from "./Tab.module.scss";

export type TabItemType = {
  label: string;
  value: string;
};

export default function Tab({
  items = [],
  activeValue,
}: {
  items: TabItemType[];
  activeValue: string;
}) {
  const router = useRouter();

  const { productId } = useParams();

  return (
    <aside className={styles.tab_wrap}>
      <button
        className={`${styles.tab_item} ${activeValue === "" ? styles.active : ""}`}
        onClick={() => {
          router.push(`/${productId}/list`);
        }}
      >
        <span>전체</span>
      </button>
      {items.map((item) => (
        <button
          key={item.value}
          className={`${styles.tab_item} ${item.value === activeValue ? styles.active : ""}`}
          onClick={() => {
            router.push(`/${productId}/list?categoryId=${item.value}`);
          }}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
