import { getModelDetail } from "@/lib/api/product/getModelDetail";
import { getModelOptions } from "@/lib/api/product/getModelOptions";

import { ModelForm } from "@/components/domain/model-form";
import Three from "@/components/domain/three/Three";

import styles from "./page.module.scss";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{
    productId: string;
    modelId: string;
  }>;
}) {
  const { productId, modelId } = await params;

  const modelDetail = await getModelDetail(modelId);
  const modelOptions = await getModelOptions(modelId);

  if (!modelDetail.success || !modelDetail.data) {
    throw new Error("Model detail not found");
  }
  if (!modelOptions.success || !modelOptions.data) {
    throw new Error("Model options not found");
  }

  return (
    <main className={styles.page_wrap}>
      <article className={styles.article_wrap}>
        <div className={styles.info_wrap}>
          <h3>{modelDetail.data?.name}</h3>
          {/* Todo : 선택된 모델에 맞는 3D 모델 렌더링 */}
          <Three />
        </div>

        {/* 모델 구매 폼 */}
        <ModelForm model={modelDetail.data} options={modelOptions.data} />
      </article>
    </main>
  );
}
