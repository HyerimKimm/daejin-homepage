"use server";

import { ProductCategoryType } from "@/types/product";
import { ResponseType } from "@/types/response";

const getProductCategoriesMockData = (
  productId: string,
): ResponseType<ProductCategoryType[]> => {
  const categories = [
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

  const result = {
    success: true,
    message: "Product categories fetched successfully",
    data: categories.filter((category) => category.productId === productId),
  };

  return result;
};

export async function getProductCategories(
  productId: string,
): Promise<ResponseType<ProductCategoryType[]>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProductCategoriesMockData(productId)), 1000);
  });
}
