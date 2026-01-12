"use server";

import { ModelOptionType } from "@/types/product";
import { ResponseType } from "@/types/response";

import { unstable_cache } from "next/cache";

// DB 조회를 시뮬레이션하는 함수 (나중에 실제 DB 조회로 변경될 부분)
async function fetchAllModelOptions(): Promise<ModelOptionType[]> {
  // 실제 DB 조회 로직이 여기에 들어갈 예정
  const allOptions: ModelOptionType[] = [
    {
      id: "1",
      modelId: "1",
      name: "멀티탭",
      description: "멀티탭 설명",
      image: "/pedal.png",
      price: 10000,
    },
    {
      id: "2",
      modelId: "1",
      name: "6.35mm 캐이블 패널 마운트",
      description: "6.35mm 캐이블 패널 마운트 설명",
      image: "/pedal.png",
      price: 20000,
    },
    {
      id: "3",
      modelId: "1",
      name: "적층형 구조",
      description: "적층형 구조 설명",
      image: "/pedal.png",
      price: 30000,
    },
    {
      id: "4",
      modelId: "1",
      name: "55파이 케이블 홀더",
      description: "55파이 케이블 홀더 설명",
      image: "/pedal.png",
      price: 40000,
    },
    {
      id: "5",
      modelId: "1",
      name: "쇼바",
      description: "쇼바 설명",
      image: "/pedal.png",
      price: 50000,
    },
  ];

  // DB 조회 시뮬레이션
  return new Promise((resolve) => {
    setTimeout(() => resolve(allOptions), 1000);
  });
}

// 전체 모델 옵션 목록을 캐시하는 함수
const getCachedAllModelOptions = unstable_cache(
  async () => {
    return await fetchAllModelOptions();
  },
  ["model-options-all"], // 캐시 키
  {
    tags: ["model-options"], // revalidate 시 사용할 태그
    revalidate: 3600, // 1시간마다 재검증 (초 단위)
  },
);

export async function getModelOptions(
  modelId: string,
): Promise<ResponseType<ModelOptionType[]>> {
  // 캐시된 전체 모델 옵션 목록 가져오기
  const allOptions = await getCachedAllModelOptions();

  // 캐시된 데이터에서 특정 모델의 옵션 필터링
  const options: ModelOptionType[] = allOptions.filter(
    (option) => option.modelId === modelId,
  );

  return {
    success: true,
    message: "Model options fetched successfully",
    data: options,
  };
}
