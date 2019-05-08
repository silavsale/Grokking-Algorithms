let list = [3, 5, 2, 7];

let sumOne = (list) => {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
};

console.log(`The simple sum function: ${sumOne(list)}`);

let sumRec = (list) => {
    if (list.length = 0) {
        return 0;
    }

    let total = 0;
    for (let i = 0; i <= list.length; i++) {
        total += sumRec(list);
        console.log(total);
    }
    return total;
};

console.log(sumRec(list));