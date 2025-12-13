export type ProductType = {
  id: string;
  label: string;
  value: string;
  description: string;
};

export type ProductCategoryType = {
  id: string;
  productId: string;
  label: string;
  value: string;
  description: string;
};

export type ProductModelType = {
  id: string;
  productId: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
