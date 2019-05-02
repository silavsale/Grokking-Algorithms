let times = [21, 3, 55, 943, 8];

let selectionSort = (array) => {

    for (let i = 0; array.length > i; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[i]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

        }
    }

    return array;
};

console.log(selectionSort(times));
