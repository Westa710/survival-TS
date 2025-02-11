"use strict";
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
