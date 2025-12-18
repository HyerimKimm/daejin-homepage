"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter/Counter";
import { Dropdown } from "@/components/ui/dropdown";

import { ModelDetailType } from "@/types/product";
import { ModelOptionType } from "@/types/product";

import styles from "./ModelForm.module.scss";

export default function ModelForm({
  model,
  options,
}: {
  model: ModelDetailType;
  options: ModelOptionType[];
}) {
  const [selectedOptions, setSelectedOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <form className={styles.form_wrap}>
      <div className={styles.form_item}>
        <label>추가 부품</label>
        <Dropdown
          items={options.map((option) => ({
            label: option.name,
            value: option.id,
          }))}
          selectedItems={selectedOptions}
          placeholder="선택해 주세요"
          onChange={(item: { label: string; value: string }) => {
            if (selectedOptions.some((option) => option.value === item.value)) {
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
        {/* <input type="number" min="1" max="100" /> */}
        <Counter
          value={quantity}
          onChange={(value: number) => setQuantity(value)}
          min={1}
          max={100}
          step={1}
        />
      </div>

      <Button type="submit">구매하기</Button>
    </form>
  );
}
