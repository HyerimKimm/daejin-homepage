import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";

const getProductListMockData: ResponseType<ProductType[]> = {
  success: true,
  message: "Product list fetched successfully",
  data: [
    {
      label: "폐달보드",
      value: "pedalboard",
    },
    {
      label: "책상",
      value: "desk",
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
