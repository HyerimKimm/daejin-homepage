"use client";

import { useEffect, useRef, useState } from "react";

import ArrowIcon from "@/assets/ArrowIcon";

import styles from "./Dropdown.module.scss";

export default function Dropdown({
  items = [],
  selectedItems = [],
  placeholder = "선택해 주세요",
  onChange = () => {},
  style = {},
}: {
  items?: {
    label: string;
    value: string;
  }[];
  selectedItems?: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
  onChange?: (item: { label: string; value: string }) => void;
  style?: React.CSSProperties;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  /* 드롭다운의 바깥을 클릭하면 드롭다운 닫음 */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown_wrap} style={style}>
      <button
        type="button"
        className={styles.dropdown_button}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span
          className={`${styles.dropdown_button_text} ${selectedItems.length === 0 ? styles.nonSelected : ""}`}
        >
          {selectedItems.map((item) => item.label).join(", ") || placeholder}
        </span>
        <ArrowIcon width={20} height={20} rotate={isOpen ? 270 : 90} />
      </button>
      {items.length > 0 && (
        <ul
          className={`${styles.dropdown_menu} ${
            isOpen ? styles.dropdown_menu_open : styles.dropdown_menu_closed
          }`}
        >
          {items.map((item) => (
            <li className={styles.dropdown_item} key={item.value}>
              <button
                type="button"
                className={
                  selectedItems.some(
                    (selectedItem) => selectedItem.value === item.value,
                  )
                    ? styles.selected
                    : ""
                }
                onClick={() => {
                  onChange(item);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
