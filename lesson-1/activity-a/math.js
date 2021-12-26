const add = (a, b) => a + b;

const sum = (...args) => {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

const mul = (...args) => {
    let product = 1;
    for (const arg of args) {
        product *= arg;
    }
    return product;
}

const div = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;

}

module.exports = {
    add,
    sum,
    mul,
    div
}
