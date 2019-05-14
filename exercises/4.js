// let list = [3, 5, 2, 7];
//
// let sumOne = (list) => {
//     let total = 0;
//     for (let i = 0; i < list.length; i++) {
//         total += list[i];
//     }
//     return total;
// };
// console.log(`The SUM is : ${sumOne(list)}`);

// console.log("list.length " + list.length);
// console.log(list);
// console.log("----------------------");
//
// let sumRec = (arr) => {
//     let total = 1;
//     if (arr === []) {
//         return 0;
//     } else {
//         // return "dddd"
//         return total + sumRec(arr[0]);
//     }
// };
//
// console.log(sumRec(list));

const count = (list) =>
{
    let ite = list[Symbol.iterator]();

    if (ite.next().done)
        return 0;
    else
        return 1 + count(list.slice(1));
}

console.log(count([]));
console.log(count([undefined, null]));
console.log(count([1, 2, undefined, 3, 4]));
