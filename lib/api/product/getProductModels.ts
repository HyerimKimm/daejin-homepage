import { ProductModelType } from "@/types/product";
import { ResponseType } from "@/types/response";

const getProductModelsMockData = {
  success: true,
  message: "Product models fetched successfully",
  data: [
    {
      id: "1",
      productId: "1",
      categoryId: "1",
      name: "Pro-M3",
      description: "Pro-M3 설명",
      image: "/pedal.png",
      price: 100000,
    },
    {
      id: "2",
      productId: "1",
      categoryId: "1",
      name: "Pro-M2",
      description: "Pro-M2 설명",
      image: "/pedal.png",
      price: 80000,
    },
  ],
};

export default async function getProductModels(
  productId: string,
  categoryId: string,
): Promise<ResponseType<ProductModelType[]>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProductModelsMockData), 1000);
  });
}
