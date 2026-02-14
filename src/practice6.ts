// src/practice6.ts

interface Product {
  id: number;
  name: string;
  price: number;
}
const p: Product = { id: 1, name: "Laptop", price: 100000 };
type ProductKey = keyof Product;//keyof T でTのプロパティのみが入る
function getProductValue(product: Product, key:ProductKey) {
  return product[key];
}

console.log(getProductValue(p, "name")); // OK
//console.log(getProductValue(p, "weight")); // エラーになってほしい