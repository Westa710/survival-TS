"use strict";
// let bodyInfo: {
//   height: number;
//   weight: number;
// }
const person = {
    name: "佐藤",
    bio: {
        height: 170,
        weight: 55,
    }
};
const person2 = {
    name: "田中",
    bio: {
        height: 180,
        weight: undefined,
    }
};
const { bio: { height: hOfSatou, weight: wOfSatou }, } = person;
const { bio: { height: hOfTanaka = 999, weight: wOfTanaka = 99 }, } = person2;
console.log(hOfSatou);
console.log(wOfSatou);
console.log(hOfTanaka);
console.log(wOfTanaka);
