// create array of elements
let array = [2, 4, 6, 11, 290, 650];
// for (let i = 0; i <= 9; i++) {
//     array[i] = i + 1;
// }


//function returns position in the array of the value inserted by the user
const binarySearch = (array, value) => {
    // initial values for start, middle and end
    let log = 0;
    let start = 0;
    let lastNum = array.length - 1;
    let mid = (start + lastNum) / 2;

    console.log(array);

    // While the middle is not what we're looking for and the list does not have a single item
    while (array[mid] !== value && start < lastNum) {
        if (value < array[mid]) {
            lastNum = mid - 1;
        } else {
            start = mid + 1;
        }

        // recalculate middle on every iteration
        mid = Math.floor((start + lastNum) / 2);
        log++;

        console.log("---------");
        console.log("Middle is " + mid);
        console.log("lastNum is " + lastNum);
        document.getElementById("array1").innerText = array;
    }

    console.log("log " + log);
    if (array[mid] !== value) {
        console.log(`There is no ${value} value in array`);
    } else {
        console.log(`Index of ${value} in array is ${array.indexOf(value)}`);
    }

    // if the current middle item is what we're looking for return it's index, else return -1
    return (array[mid] !== value) ? -1 : mid;
};

binarySearch(array, 6);

