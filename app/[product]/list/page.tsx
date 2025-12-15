import Image from "next/image";
import Link from "next/link";

import { getProductCategories } from "@/lib/api/product/getProductCategories";

import Tab from "@/components/ui/tab/Tab";

import { ProductCategoryType } from "@/types/product";

import styles from "./page.module.scss";

export default async function ProductListPage({
  params,
  searchParams,
}: {
  params: {
    product: string;
  };
  searchParams: {
    category: string;
  };
}) {
  const { product } = params;
  const { category = "" } = searchParams;

  console.log(product);

  const categories = await getProductCategories(params.product);

  const selectedCategory: ProductCategoryType | undefined =
    categories.data.find((item) => {
      return item.value === category;
    });
  if (!categories.success) {
    throw new Error("Categories not found");
  }

  return (
    <main className={styles.page_wrap}>
      {/* 카테고리 탭*/}
      <Tab
        items={categories.data.map((category) => ({
          label: category.label,
          value: category.value,
        }))}
        activeValue={category || categories.data[0].value}
      />
      {/* 제품 목록 */}
    </main>
  );
}
