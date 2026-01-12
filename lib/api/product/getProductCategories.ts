"use server";

import { ProductCategoryType } from "@/types/product";
import { ResponseType } from "@/types/response";

import { unstable_cache } from "next/cache";

// DB 조회를 시뮬레이션하는 함수 (나중에 실제 DB 조회로 변경될 부분)
async function fetchAllProductCategories(): Promise<ProductCategoryType[]> {
  // 실제 DB 조회 로직이 여기에 들어갈 예정
  const categories: ProductCategoryType[] = [
    {
      id: "1",
      productId: "1",
      label: "Standard",
      value: "standard",
      description: "Standard 카테고리는 뭐뭐입니다.",
    },
    {
      id: "2",
      productId: "1",
      label: "Pro",
      value: "pro",
      description: "Pro 카테고리는 뭐뭐입니다.",
    },
    {
      id: "3",
      productId: "2",
      label: "1인용",
      value: "1_person",
      description: "1인용 책상 카테고리는 뭐뭐입니다.",
    },
    {
      id: "4",
      productId: "2",
      label: "2인용",
      value: "2_person",
      description: "2인용 책상 카테고리는 뭐뭐입니다.",
    },
  ];

  // DB 조회 시뮬레이션
  return new Promise((resolve) => {
    setTimeout(() => resolve(categories), 1000);
  });
}

// 전체 제품 카테고리 목록을 캐시하는 함수
const getCachedAllProductCategories = unstable_cache(
  async () => {
    return await fetchAllProductCategories();
  },
  ["product-categories-all"], // 캐시 키
  {
    tags: ["product-categories"], // revalidate 시 사용할 태그
    revalidate: 3600, // 1시간마다 재검증 (초 단위)
  },
);

export async function getProductCategories(
  productId: string,
): Promise<ResponseType<ProductCategoryType[]>> {
  // 캐시된 전체 제품 카테고리 목록 가져오기
  const allCategories = await getCachedAllProductCategories();

  // 캐시된 데이터에서 특정 제품의 카테고리 필터링
  const categories = allCategories.filter(
    (category) => category.productId === productId,
  );

  return {
    success: true,
    message: "Product categories fetched successfully",
    data: categories,
  };
}
