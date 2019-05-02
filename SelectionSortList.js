let artist = [
    {artistName: "Metallica", playCount: "1233"},
    {artistName: "Pink Floyd", playCount: "11344"},
    {artistName: "Elton John", playCount: "332"},
    {artistName: "David Bowie", playCount: "553"},
    {artistName: "John Lennon", playCount: "22"},
    {artistName: "Roy Orbison", playCount: "344"},
    {artistName: "Madonna", playCount: "12"},
    {artistName: "Michael Jackson", playCount: "3"},
    {artistName: "Stevie Wonder", playCount: "15"},
    {artistName: "Led Zeppelin", playCount: "32"},
    {artistName: "Bob Marley", playCount: "21"},
    {artistName: "The Beatles", playCount: "155"},

];

// let artistSortedList = [];
//
// let currMin = artist[0].playCount;
// let currItem;

// console.log(currMin);

let selectionSort = (array) => {

    for (let i = 0; array.length > i; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[j].playCount < array[i].playCount) {
                let temp = array[i].playCount;
                array[i].playCount = array[j].playCount;
                array[j].playCount = temp;
            }
        }
    }

    return artist;
};

console.log(selectionSort(artist));
