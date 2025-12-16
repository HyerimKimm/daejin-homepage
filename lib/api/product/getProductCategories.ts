import { ProductCategoryType } from "@/types/product";
import { ResponseType } from "@/types/response";

const getProductCategoriesMockData: ResponseType<ProductCategoryType[]> = {
  success: true,
  message: "Product categories fetched successfully",
  data: [
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
  ],
};

export async function getProductCategories(
  productId: string,
): Promise<ResponseType<ProductCategoryType[]>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProductCategoriesMockData), 1000);
  });
}
