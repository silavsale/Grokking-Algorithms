const hash = (key, size) => {
    let hashedKey = 0;

    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i);
    }

    return hashedKey % size;
};

class Map {

    constructor() {
        this.arr = []
    }

    set(x, y) {
        this.arr.push([x, y]);
    }

    get(x) {
        let result = 0;

        this.arr.forEach(element => {
            if (element[0] === x) {
                result = element[1];
            }
        });

        return result;
    }


}

let m = new Map();

// m.set('a', '1');
// m.set('b', '2');

for (x = 0; x < 25; x++) {
    m.set(`element ${x}`, x)
}

m.get('a');
console.log(m.arr);
console.log(m.get('b'));

