// src/practice7.ts

/*
// このコードをリファクタリングしてください
function calculate(items: any) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    let p = items[i].price;
    // 数量(amount)がない場合は1として扱う
    let a = items[i].amount ? items[i].amount : 1;
    
    total += p * a;

    // カテゴリが "sale" なら 100円引きするという謎のベタ書きルール
    if (items[i].category === "sale") {
      total -= 100;
    }
  }

  // 消費税10%を加算
  return total * 1.1;
}

// 実行例（でも型がないからミスに気づけない）
const cart = [
  { name: "PC", price: 100000, category: "tech" },
  { name: "Mouse", price: 5000, amount: 2, category: "sale" }
];

console.log(calculate(cart));
*/
interface Item{
    name:string;
    price:number;
    amount?:number;
    category:string;
}
const cart:Item[] = [
    { name: "PC", price: 100000, category: "tech" },
    { name: "Mouse", price: 5000, amount: 2, category: "sale" }
];

function calculateSubTotal(price:number, amount:number|undefined):number{
    if(!amount){
        return price;
    }
    return price * amount;
}
function applyDiscount(subTotal:number, itemCategory:string ,discountAmount:number, discountCategory:string):number{
    const isApply = itemCategory === discountCategory;
    const appliedPrice = isApply ? subTotal - discountAmount : subTotal;
    return appliedPrice>=0 ? appliedPrice : 0;
}
function applyTax(total:number, taxRate:number=1.1):number{
    return Math.floor(total * taxRate);
}

const taxRate = 1.1
function calculateCartPrice(cart:Item[], discountAmount:number, discountCategory:string):number{
    const cartSubtotal = cart.map(item => {
        const discountPrice = applyDiscount(item.price, item.category, discountAmount, discountCategory)
        const subTotal = calculateSubTotal(discountPrice, item.amount);
        return subTotal;
    });
    const totalPrice = cartSubtotal.reduce((sum, subTotal)=>sum + subTotal, 0);
    const taxedPrice = applyTax(totalPrice, taxRate);
    return taxedPrice;
}
function displayPrice(price:number):void{
    console.log(`金額: ${price.toLocaleString()} 円`)
}
const totalPrice = calculateCartPrice(cart, 100, "sale");
displayPrice(totalPrice);