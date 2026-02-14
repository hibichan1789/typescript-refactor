// src/practice5.ts
type Category = "Electronics" | "Food" | "Clothing";

// 課題:
// 「キーが Category 型」「値が Product の配列（Product[]）」であるような
// オブジェクトの型を Record を使って作ってください。
interface Product{
    id:number;
    name:string;
    price:number;
}
type CategoryMap = Record<Category, Product[]>;//Record<key, type>でプロパティがkey, valueがtypeの型になる

const myInventory: CategoryMap = {
  Electronics: [],
  Food: [],
  Clothing: []
};