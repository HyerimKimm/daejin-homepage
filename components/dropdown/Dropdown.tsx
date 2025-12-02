"use client";

import { useRef, useState } from "react";

import ArrowIcon from "@/assets/ArrowIcon";

import styles from "./Dropdown.module.scss";

export default function Dropdown() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div ref={dropdownRef} className={styles.dropdown_wrap}>
      <button
        type="button"
        className={styles.dropdown_button}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span>드롭다운</span>
        <ArrowIcon width={20} height={20} rotate={isOpen ? 90 : 270} />
      </button>
    </div>
  );
}
