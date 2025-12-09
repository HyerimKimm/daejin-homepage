"use client";

import { useState } from "react";

import Three from "@/components/three/Three";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";

import styles from "./page.module.scss";

export default function ProductDetailPage() {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const items = [
    {
      label: "멀티탭",
      value: "multi_tab",
    },
    {
      label: "6.35mm 캐이블 패널 마운트",
      value: "635_cable_panel_mount",
    },
    {
      label: "적층형 구조",
      value: "layered_structure",
    },
    {
      label: "55파이 케이블 홀더",
      value: "55_cable_holder",
    },
    {
      label: "쇼바",
      value: "showba",
    },
  ];

  return (
    <main className={styles.page_wrap}>
      <article className={styles.article_wrap}>
        <div className={styles.info_wrap}>
          <Three />
        </div>
        <form className={styles.form_wrap}>
          <h1>폐달보드 Pro-M3</h1>

          <div className={styles.form_item}>
            <label>추가 부품</label>
            <Dropdown
              items={items}
              selectedItems={selectedOptions}
              placeholder="선택해 주세요"
              onChange={(item: { label: string; value: string }) => {
                if (
                  selectedOptions.some((option) => option.value === item.value)
                ) {
                  setSelectedOptions((prev) =>
                    prev.filter((option) => option.value !== item.value),
                  );
                } else {
                  setSelectedOptions((prev) => [...prev, item]);
                }
              }}
              style={{ flexGrow: 1 }}
            />
          </div>
          <div className={styles.form_item}>
            <label>수량</label>
            <input type="number" min="1" max="100" />
          </div>
          <Button type="submit">구매하기</Button>
        </form>
      </article>
    </main>
  );
}
