import Image from "next/image";
import Link from "next/link";

import { getProductCategories } from "@/lib/api/product/getProductCategories";
import getProductModels from "@/lib/api/product/getProductModels";
import { Suspense } from "react";

import Tab from "@/components/ui/tab/Tab";

import ProductListLoadingPage from "./loading";
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

  return (
    <main className={styles.page_wrap}>
      {/* 카테고리 탭 */}
      <Tab
        items={categories.data.map((category) => ({
          label: category.label,
          value: category.id,
        }))}
        activeValue={categoryId}
      />
      <Suspense key={categoryId} fallback={<ProductListLoadingPage />}>
        <ProductList productId={productId} categoryId={categoryId} />
      </Suspense>
    </main>
  );
}

async function ProductList({
  productId,
  categoryId,
}: {
  productId: string;
  categoryId: string;
}) {
  const models = await getProductModels(productId, categoryId);

  return (
    <ul
      className={`${styles.product_list} ${models.data.length === 1 ? styles.one : models.data.length === 2 ? styles.two : models.data.length === 3 ? styles.three : ""}`}
    >
      {models.data.map((model) => (
        <Link key={model.id} href={`/${productId}/${model.id}`}>
          <li className={`${styles.product_item}`}>
            <div className={styles.product_image}>
              <Image src={model.image} alt={model.name} fill />
            </div>
            <div>{model.name}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
