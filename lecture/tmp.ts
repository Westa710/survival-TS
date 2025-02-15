// let bodyInfo: {
//   height: number;
//   weight: number;
// }

// let calculator: {
//   calcBmi(height: number, weight: number): number;
// }


// bodyInfo = {
//   height: 1.7,
//   weight: 55,
// }

// calculator = {
//   calcBmi(height, weight) {
//     return weight / height / height;
//   }
// }

// const bmi = calculator.calcBmi(bodyInfo.height, bodyInfo.weight);

// console.log(bmi);

// let obj: {
//   readonly foo: {
//     bar: number;
//   }
// }

// obj = {
//   foo: {
//     bar: 1,
//   }
// }

// obj.foo = {bar: 2}
// // 読み取り専用プロパティであるため、'foo' に代入することはできません。

// obj.foo.bar = 1;
// // これはコンパイルエラーにならない

// const xy: { x: number; y: number } = { x: 1, y: 2 };
// let onlyX: { x: number };
// onlyX = xy;
// console.log(onlyX);

// let onlyY: { y: number};
// onlyY = { y: 10 };
// onlyY = { y: 15, z: 10 };

// type Person = {
//   name: string;
//   bio: {
//     height: number;
//     weight?: number;
//   }
// }


// const person: Person = {
//   name: "佐藤",
//   bio: {
//     height: 170,
//     weight: 55,
//   }
// }

// const person2: Person = {
//   name: "田中",
//   bio: {
//     height: 180,
//     weight: undefined,
//   }
// }

// const {
//   bio: { height: hOfSatou, weight: wOfSatou },
// } = person;

// const {
//   bio: { height: hOfTanaka = 999, weight: wOfTanaka = 99 },
// } = person2;

// console.log(hOfSatou);
// console.log(wOfSatou);

// console.log(hOfTanaka);
// console.log(wOfTanaka);


// const person = undefined;
// console.log(person?.name);
// // undefined

// // const person = { name: "satou" };
// const person2 = { name: { first: undefined, last: "takeru" } };
// console.log(person2?.name?.first);
// // undefined

// console.log(person2?.name?.last);
// // takeru

// const increment = undefined;
// const result = increment?.(1);
// console.log(result);
// // undefined

// const increment2 = (n: number) => n + 1;
// const result2 = increment2?.(1);
// console.log(result2);
// // 2

// const books = undefined;
// const title = books?.[0];
// console.log(title);
// // undefined

// const books2 = ["サバイバルTypeScript"];
// const title2 = books2?.[0];
// console.log(title2);
// // サバイバルTypeScript

// let books3 = undefined;
// let title3 = books3?.title ?? "デフォルトタイトル";
// console.log(title3);
// // デフォルトタイトル

// books3 = { title: "ハンズオンNode.js" };
// title3 = books3?.title ?? "デフォルトタイトル";
// console.log(title3);
// // ハンズオンNode.js

// const nums: readonly number[] = [1, 2, 3];
// const coppiedNums: number[] = nums;

// const nums2: number[] = [1, 2, 3];
// const coppiedNums2: readonly number[] = nums2;

const arr: number[][] = [[1], [2], [3, 4]];
const copiedArr: number[][] = [...arr];

// // 2層目にpushすると，元の配列も書き換えられてしまう
// arr[0].push(10);
// console.log(copiedArr);
// // [ [ 1, 10 ], [ 2 ], [ 3, 4 ] ]

// // 1層目にpushすると，その変更は元の配列には影響を与えない
// const arr2: number[][] = [[5], [6], [7, 8]];
// const copiedArr2: number[][] = [...arr2];
// arr.push([20]);
// console.log(copiedArr2);
// // [ [ 5 ], [ 6 ], [ 7, 8 ] ]

// function concatOnlyStr(arr: (string | number)[]): string {
//   let concatenatedStr = "";
//   for (const elem of arr) {
//     if(typeof elem === "string"){
//       concatenatedStr += elem;
//     }
//   }
//   return concatenatedStr;
// }

// const strAndNum: (string | number)[] = ["Hello, ", 1, "World!", 2];
// console.log(concatOnlyStr(strAndNum));
// // Hello, World!

// const strOnly: string[] = ["Alice ", "and ", "Bob"];
// console.log(concatOnlyStr(strOnly));
// // Alice and Bob