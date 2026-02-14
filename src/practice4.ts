// src/practice4.ts
// ジェネリクスで柔軟にtypeを作る練習

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  category: string;
}

type ProductSummary = Pick<Product, "id"|"name"|"price">;

type ProductUpdateInput = Partial<Omit<Product, "id">>;

type ProductPreview = Omit<Product, "stock"|"category">;