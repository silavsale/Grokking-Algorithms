let array = [
    [3, 2, 1],
    [43, 23, 24, 16, 83, 91],
    [543, 234, 235, 883],
    [5432, 9980]
];

let row = 1;

for (let i = 0; i < array.length; i++) {
    let column = 1;

    console.log("Row number " + row);
    document.write("Row number " + row);
    document.write("<br>");

    for (let j = 0; j < array[i].length; j++) {
        console.log("Column number " + column);

        console.log(array[i][j]);
        document.write(array[i][j] + ", ");
        column++;
    }
    // document.write("Column number " + column);

    console.log("---------");
    document.write("<br>");
    document.write("---------");
    document.write("<br>");

    row++;

}