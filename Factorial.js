// factorial function using recursion

let x = 7;

let factorial = (value) => {
    console.log(value);
    if (value == 1 || value == 0) {
        return 1
    } else {

        return value * factorial(value - 1);

    }
};

console.log(factorial(x));
