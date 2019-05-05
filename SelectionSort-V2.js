//My way to sort an array. I know is looks a bit strange but it's works)))

let arr = [23, 42, 144, 45, 643, 18];
let arrLength = arr.slice(0);

let findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
};

let selectionSort = (arr) => {
    let newArr = [];
    for (let i = 0; i < arrLength.length; i++) {
        let smallest = findSmallest(arr);
        smallest = arr.splice(smallest, 1);
        newArr.push(smallest);
        console.log(smallest);
        console.log("New arr = " + newArr)
    }
    return newArr;
};

console.log(selectionSort(arr));

