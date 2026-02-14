// src/practice2.ts

interface User {
  name: string;
  age: number;
}

const currentUser: User = { name: "hibichan", age: 22 };

// 課題:
// updateUser 関数の引数 「fieldsToUpdate」 に適切な型をつけてください。
// name だけ、あるいは age だけ、あるいは両方、という柔軟な更新を可能にしたいです。
function updateUser(user: User, fieldsToUpdate:UpdateUser): User {
  return { ...user, ...fieldsToUpdate };//fieldsToUpdateにundefinedじゃないやつが上書きされる
}
type UpdateUser = Partial<User>;//Partial<T>でTのプロパティをオプショナルにできる
const updated = updateUser(currentUser, { age: 23 }); // ageだけ更新したい
console.log(updated);