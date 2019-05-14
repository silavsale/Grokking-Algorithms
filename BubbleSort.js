<<<<<<< HEAD
let arr = [123, 2, 18, 8];

console.log(arr);

const tmp = arr[1];
arr[1] = arr[1 + 1];
arr[1 + 1] = tmp;

console.log(arr);
=======
let arr = [2, 12, 4, 1, 55, 34, 3, 8, 90];

let swap = (array, firstItem, secondItem) => {
    let tmp = array[firstItem];
    array[firstItem] = array[secondItem];
    array[secondItem] = tmp;
};

let bubbleSort = (array) => {
    let len = array.length;
    let i, j, stop;
    // stop = j - 1;

    for (i = 0; i < len; i++) {
        for (j = 0; j < len -1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j+1);
            }
        }
    }
    return array;
};

console.log(bubbleSort(arr));
>>>>>>> b5a22ba055816ef7488c1c1e1f764b7e6803f5a6
