// src/challenge2.ts


// 課題1
type ApiResponse<T> = {
    data:T[];
    status:number;
}

// 課題2
type StringKeys<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}
//[K in keyof T] KはTのキーが入るプロパティのバリューのT[K]はstringであればKになり、それ以外はneverで定義しない