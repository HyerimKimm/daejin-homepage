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
  categoryId: string | null; /* 카테고리가 없는 경우 null */
  name: string;
  description: string;
  image: string;
  price: number;
};

export type ModelDetailType = {
  id: string;
  productId: string;
  categoryId: string | null; /* 카테고리가 없는 경우 null */
  name: string;
  description: string;
  image: string;
  price: number;
};

export type ModelOptionType = {
  id: string;
  modelId: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
