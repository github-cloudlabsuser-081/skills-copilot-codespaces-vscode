const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)));
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 !== 0) {
        return num1 / num2;
    } else {
        console.log('Error: Division by zero is not allowed.');
        process.exit(1);
    }
}

async function calculator() {
    const num1 = parseFloat(await askQuestion('Enter the first number: '));
    const num2 = parseFloat(await askQuestion('Enter the second number: '));
    const operation = await askQuestion('Enter the operation (add, subtract, multiply, divide): ');

    let result;
    switch(operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            console.log('Error: Invalid operation.');
            rl.close();
            return;
    }

    console.log(`The result is: ${result}`);
    rl.close();
}

calculator();