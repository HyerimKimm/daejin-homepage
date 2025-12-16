import { getProductCategories } from "@/lib/api/product/getProductCategories";
import getProductModels from "@/lib/api/product/getProductModels";

import Tab from "@/components/ui/tab/Tab";

import styles from "./page.module.scss";

export default async function ProductListPage({
  params,
  searchParams,
}: {
  params: Promise<{
    productId: string;
  }>;
  searchParams: Promise<{
    categoryId: string;
  }>;
}) {
  const { productId } = await params;
  const { categoryId = "" } = await searchParams;

  const categories = await getProductCategories(productId);

  if (!categories.success) {
    throw new Error("Categories not found");
  }

  const models = await getProductModels(productId, categoryId);

  return (
    <main className={styles.page_wrap}>
      {/* 카테고리 탭*/}
      <Tab
        items={categories.data.map((category) => ({
          label: category.label,
          value: category.id,
        }))}
        activeValue={categoryId}
      />
      {/* 제품 목록 */}
    </main>
  );
}
