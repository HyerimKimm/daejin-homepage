"use server";

import { ModelOptionType } from "@/types/product";
import { ResponseType } from "@/types/response";

export async function getModelOptions(
  modelId: string,
): Promise<ResponseType<ModelOptionType[]>> {
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

  const options: ModelOptionType[] = allOptions.filter(
    (option) => option.modelId === modelId,
  );

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
          message: "Model options fetched successfully",
          data: options,
        }),
      1000,
    );
  });
}
