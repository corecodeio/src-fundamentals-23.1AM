// ======= UTILS ==========
let memory = [];
let selectedOperator = null;
const equalHandler = () => {
    const currentValue = display.innerHTML;
    const result = eval(`${memory.join(' ')} ${currentValue}`);
    setDisplayValue(result);
    memory = [];
}

// ======= Display ==========
const display = document.querySelector("#display");
const setDisplayValue = (value) => {
    display.innerHTML = value;
}

// ======= Numbers ==========
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const numbers = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
];

numbers.forEach((element, index) => {
    element.addEventListener('click', () => {
        const currentValue = display.innerHTML;
        let newValue = `${currentValue}${index}`;
        if (currentValue === '0' || selectedOperator !== null) {
            newValue = index;
        }
        setDisplayValue(newValue);

        if (selectedOperator !== null) {
            selectedOperator.classList.remove('selected');
            selectedOperator = null;
        }
    });
});

// ======= AC ==========
const ac = document.querySelector('#ac')
ac.addEventListener('click', () => {
    if (selectedOperator !== null) {
        selectedOperator.classList.remove('selected');
    }
    setDisplayValue(0);
    memory = [];
});

// ======= SIGN ==========
const sig = document.querySelector('#sig');
sig.addEventListener('click', () => {
    let currentValue = Number(display.innerHTML);
    const inverseValue = currentValue * -1;
    setDisplayValue(inverseValue);
    if (memory.length === 2) {
        memory = [
            inverseValue,
            memory.pop(),
        ]
    }
});

// ======= DOT ==========
const dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    const currentValue = display.innerHTML;
    if (!currentValue.includes('.')) {
        setDisplayValue(`${currentValue}.`);
    }
})

// ======= PERCENT ==========
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    let currentValue = Number(display.innerHTML);
    currentValue /= 100;
    setDisplayValue(currentValue);
});

// ======= OPERATORS ==========
const div = document.querySelector('#div');
const mul = document.querySelector('#mul');
const sum = document.querySelector('#sum');
const sub = document.querySelector('#sub');

const operators = [
    { el: div, sign: '/'},
    { el: mul, sign: '*'},
    { el: sum, sign: '+'},
    { el: sub, sign: '-'}
];

operators.forEach((operator) => {
    operator.el.addEventListener('click', () => {
        let currentValue = Number(display.innerHTML);
        if (memory.length === 0) {
            memory.push(currentValue);
        }

        if (memory.length === 2 && selectedOperator !== null) {
            memory.pop();
            selectedOperator.classList.remove('selected');
        }

        if (memory.length === 2 && selectedOperator === null) {
            equalHandler();
            currentValue = Number(display.innerHTML);
            memory.push(currentValue);
        }

        memory.push(operator.sign);
        operator.el.classList.add('selected');
        selectedOperator = operator.el;
    });
});

// ======= EQUAL ==========
const equal = document.querySelector('#equal');
equal.addEventListener('click', equalHandler);
