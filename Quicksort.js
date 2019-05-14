const arr = [2, 434, 23, 16, 89, 11, 34, 12344, 3];

const partition = (arr, low, hi) => {
    const pivotPosition = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotPosition];
    while (hi >= low) {
        while (arr[hi] > pivot) {
            hi--;
        }

        while (arr[low] < pivot) {
            low++;
        }

        if (hi >= low) {
            const tmp = arr[low];
            arr[low] = arr[hi];
            arr[hi] = tmp;
        }
    }
};


const qsort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[Math.floor(Math.random() * arr.length)];
    // const pivot = arr.length / 2;
    console.log("pivot " + pivot);
    const les = arr.filter(value => value < pivot);
    const greater = arr.filter(value => value > pivot);
    return [...qsort(les), pivot, ...qsort(greater)];

};


console.log(qsort(arr));

console.log(partition(arr, 1,12));
