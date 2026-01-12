"use server";

import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";

import { unstable_cache } from "next/cache";

// DB 조회를 시뮬레이션하는 함수 (나중에 실제 DB 조회로 변경될 부분)
async function fetchProductList(): Promise<ProductType[]> {
  // 실제 DB 조회 로직이 여기에 들어갈 예정
  const products: ProductType[] = [
    {
      id: "1",
      label: "폐달보드",
      value: "pedalboard",
      description: "폐달보드는 뭐뭐입니다.",
    },
    {
      id: "2",
      label: "책상",
      value: "desk",
      description: "개쩌는 책상을 구경하세요.",
    },
  ];

  // DB 조회 시뮬레이션
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
}

// 제품 목록을 캐시하는 함수
const getCachedProductList = unstable_cache(
  async () => {
    return await fetchProductList();
  },
  ["product-list"], // 캐시 키
  {
    tags: ["product-list"], // revalidate 시 사용할 태그
    revalidate: 3600, // 1시간마다 재검증 (초 단위)
  },
);

export default async function getProductList(): Promise<
  ResponseType<ProductType[]>
> {
  // 캐시된 제품 목록 가져오기
  const products = await getCachedProductList();

  return {
    success: true,
    message: "Product list fetched successfully",
    data: products,
  };
}
