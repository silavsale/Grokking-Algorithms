let array = [10, 4, 3, 6, 8, 9, 14, 5, 1, 121];

let curMin = array[0];
// let curItem;

for (let i = 0; array.length > i; i++) {
    // curMin = array [i];
    console.log("array[" + i + "] " + array[i]);
    if (array[i] < curMin) {
        curMin = array[i];
        console.log("curMin in the loop = " + curMin);
    }
}

console.log("curMin at the end = " + curMin);
// console.log(curItem);

