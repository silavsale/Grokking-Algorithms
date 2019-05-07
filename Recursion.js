let arr = [3, 23, 233, 12, 77, 15];

let recursion = (someArray) => {
    someArray.pop();
    if (someArray.length > 0) {
        recursion(someArray);
    }
};


recursion(arr);

console.log(arr);
