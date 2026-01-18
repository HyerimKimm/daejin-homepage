"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useToastStore } from "@/stores/useToastStore";

import styles from "./Toast.module.scss";

export default function Toast({ width = 250 }: { width?: number }) {
  const [mounted, setMounted] = useState(false);
  const [exitingIds, setExitingIds] = useState<Set<string>>(new Set());

  const toastList = useToastStore((state) => state.toastList);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // toastList가 변경될 때 exit 애니메이션 처리
    const currentIds = new Set(toastList.map((toast) => toast.id));
    setExitingIds((prev) => {
      const newExiting = new Set<string>();
      prev.forEach((id) => {
        if (!currentIds.has(id)) {
          newExiting.add(id);
        }
      });
      return newExiting;
    });
  }, [toastList]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={styles.toast_wrap}
      style={{
        left: `calc(50vw - ${width / 2}px)`,
      }}
    >
      {toastList.map((toast) => {
        const isExiting = exitingIds.has(toast.id);
        return (
          <div
            key={toast.id}
            className={`${styles.toast_item} ${
              toast.state === "success"
                ? styles.success
                : toast.state === "error"
                  ? styles.error
                  : ""
            } ${isExiting ? styles.exiting : styles.entering}`}
            style={{ width: width }}
            onAnimationEnd={() => {
              if (isExiting) {
                setExitingIds((prev) => {
                  const newSet = new Set(prev);
                  newSet.delete(toast.id);
                  return newSet;
                });
              }
            }}
          >
            {toast.message}
          </div>
        );
      })}
    </div>,
    window.document.body,
  );
}

export const useToast = () => {
  const show = useToastStore((state) => state.show);

  return show;
};
