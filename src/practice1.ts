// src/practice1.ts
/*
// 【リファクタリング前】
// 問題点: 
// 1. any型が使われていて、型安全ではない
// 2. 存在しないプロパティにアクセスしてもエラーにならない
function printUser(user: any) {
  console.log("Name: " + user.name);
  console.log("Age: " + user.age.toString());
}

const data = { name: "Alice", age: 25 };
printUser(data);

// 存在しないデータを入れると、実行時にエラー（クラッシュ）する！
// printUser({ name: "Bob" });
*/

interface User{
    name:string;
    age?:number;
}
function printUserInfo(user:User):void{
    console.log(`Name: ${user.name}`);
    if(user.age !== undefined){
        console.log(`Age: ${user.age}`);
        return;
    }
}
const data:User = {name:"hibichan", age:22};
printUserInfo(data);