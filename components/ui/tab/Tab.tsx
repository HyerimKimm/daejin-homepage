"use client";

import styles from "./Tab.module.scss";

export type TabItemType = {
  label: string;
  value: string;
  onClick: () => void;
};

export default function Tab({
  items = [],
  activeValue,
}: {
  items: TabItemType[];
  activeValue: string;
}) {
  return (
    <aside className={styles.tab_wrap}>
      {items.map((item) => (
        <button
          key={item.value}
          className={`${styles.tab_item} ${item.value === activeValue ? styles.active : ""}`}
          onClick={item.onClick}
        >
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
