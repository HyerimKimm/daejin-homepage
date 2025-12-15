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

  const { product } = useParams();

  return (
    <aside className={styles.tab_wrap}>
      {items.map((item) => (
        <button
          key={item.value}
          className={`${styles.tab_item} ${item.value === activeValue ? styles.active : ""}`}
          onClick={() => {
            router.push(`/${product}/list?category=${item.value}`);
          }}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
