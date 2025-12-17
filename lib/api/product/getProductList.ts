"use server";

import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";

const getProductListMockData: ResponseType<ProductType[]> = {
  success: true,
  message: "Product list fetched successfully",
  data: [
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
  ],
};

export default async function getProductList(): Promise<
  ResponseType<ProductType[]>
> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProductListMockData), 1000);
  });
}
