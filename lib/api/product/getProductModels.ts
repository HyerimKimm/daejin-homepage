"use server";

import { ProductModelType } from "@/types/product";
import { ResponseType } from "@/types/response";

import { unstable_cache } from "next/cache";

// DB 조회를 시뮬레이션하는 함수 (나중에 실제 DB 조회로 변경될 부분)
async function fetchAllProductModels(): Promise<ProductModelType[]> {
  // 실제 DB 조회 로직이 여기에 들어갈 예정
  const allModels: ProductModelType[] = [
    {
      id: "1",
      productId: "1",
      categoryId: "2",
      name: "Pro-M3",
      description: "Pro-M3 설명",
      image: "/pedal.png",
      price: 100000,
    },
    {
      id: "2",
      productId: "1",
      categoryId: "2",
      name: "Pro-M2",
      description: "Pro-M2 설명",
      image: "/pedal.png",
      price: 80000,
    },
    {
      id: "3",
      productId: "1",
      categoryId: "1",
      name: "Standard-M1",
      description: "Standard-M1 설명",
      image: "/pedal.png",
      price: 60000,
    },
    {
      id: "4",
      productId: "2",
      categoryId: "3",
      name: "책상",
      description: "책상 설명",
      image: "/pedal.png",
      price: 120000,
    },
  ];

  // DB 조회 시뮬레이션
  return new Promise((resolve) => {
    setTimeout(() => resolve(allModels), 1000);
  });
}

// 전체 제품 모델 목록을 캐시하는 함수
const getCachedAllProductModels = unstable_cache(
  async () => {
    return await fetchAllProductModels();
  },
  ["product-models-all"], // 캐시 키
  {
    tags: ["product-models"], // revalidate 시 사용할 태그
    revalidate: 3600, // 1시간마다 재검증 (초 단위)
  },
);

export default async function getProductModels(
  productId: string,
  categoryId: string,
): Promise<ResponseType<ProductModelType[]>> {
  // 캐시된 전체 제품 모델 목록 가져오기
  const allModels = await getCachedAllProductModels();

  // 캐시된 데이터에서 필터링
  let models: ProductModelType[];

  /* 카테고리가 전체임 */
  if (categoryId === "") {
    models = allModels.filter((item) => item.productId === productId);
  } else {
    models = allModels
      .filter((item) => item.productId === productId)
      .filter((item) => item.categoryId === categoryId);
  }

  return {
    success: true,
    message: "Product models fetched successfully",
    data: models,
  };
}
