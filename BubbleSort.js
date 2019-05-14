let arr = [123, 2, 18, 8];

console.log(arr);

const tmp = arr[1];
arr[1] = arr[1 + 1];
arr[1 + 1] = tmp;

console.log(arr);
