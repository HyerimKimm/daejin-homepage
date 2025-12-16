import { ProductModelType } from "@/types/product";
import { ResponseType } from "@/types/response";

const getProductModelsMockData = (
  productId: string,
  categoryId: string,
): ResponseType<ProductModelType[]> => {
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

  /* 카테고리가 전체임 */
  if (categoryId === "") {
    return {
      success: true,
      message: "Product models fetched successfully",
      data: allModels.filter((item) => item.productId === productId),
    };
  } else {
    const models = allModels.filter((item) => item.productId === productId);

    return {
      success: true,
      message: "Product models fetched successfully",
      data: models.filter((item) => item.categoryId === categoryId),
    };
  }
};

export default async function getProductModels(
  productId: string,
  categoryId: string,
): Promise<ResponseType<ProductModelType[]>> {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(getProductModelsMockData(productId, categoryId)),
      1000,
    );
  });
}
