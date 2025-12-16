import { getProductCategories } from "@/lib/api/product/getProductCategories";

import Tab from "@/components/ui/tab/Tab";

import styles from "./page.module.scss";

export default async function ProductListPage({
  params,
  searchParams,
}: {
  params: Promise<{
    product: string;
  }>;
  searchParams: Promise<{
    category: string;
  }>;
}) {
  const { product } = await params;
  const { category: selectedCategory } = await searchParams;

  console.log(selectedCategory);
  const categories = await getProductCategories(product);

  if (!categories.success) {
    throw new Error("Categories not found");
  }

  console.log(categories.data);

  return (
    <main className={styles.page_wrap}>
      {/* 카테고리 탭*/}
      <Tab
        items={categories.data.map((category) => ({
          label: category.label,
          value: category.value,
        }))}
        activeValue={selectedCategory}
      />
      {/* 제품 목록 */}
    </main>
  );
}
