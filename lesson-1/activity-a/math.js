const add = (a, b) => a + b;

const sum = (...args) => {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

// display the returned value of the above functions
console.log(add(2, 5));
console.log(sum(10, 5, 6));