"use server";

import { ModelDetailType } from "@/types/product";
import { ResponseType } from "@/types/response";

export async function getModelDetail(
  modelId: string,
): Promise<ResponseType<ModelDetailType | null>> {
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
