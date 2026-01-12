"use server";

import { unstable_cache } from "next/cache";

import { ModelDetailType } from "@/types/product";
import { ResponseType } from "@/types/response";

// DB 조회를 시뮬레이션하는 함수 (나중에 실제 DB 조회로 변경될 부분)
async function fetchAllModels(): Promise<ModelDetailType[]> {
  // 실제 DB 조회 로직이 여기에 들어갈 예정
  const allModels: ModelDetailType[] = [
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

// 전체 모델 목록을 캐시하는 함수
const getCachedAllModels = unstable_cache(
  async () => {
    return await fetchAllModels();
  },
  ["model-detail-all"], // 캐시 키
  {
    tags: ["model-detail"], // revalidate 시 사용할 태그
    revalidate: 3600, // 1시간마다 재검증 (초 단위)
  },
);

export async function getModelDetail(
  modelId: string,
): Promise<ResponseType<ModelDetailType | null>> {
  // 캐시된 전체 모델 목록 가져오기
  const allModels = await getCachedAllModels();

  // 캐시된 데이터에서 특정 모델 찾기
  const model: ModelDetailType | undefined = allModels.find(
    (model) => model.id === modelId,
  );

  if (!model) {
    return {
      success: false,
      message: "Model not found",
      data: null,
    };
  }

  return {
    success: true,
    message: "Model detail fetched successfully",
    data: model,
  };
}
